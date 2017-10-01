import {
    FuseBox,
    JSONPlugin,
    CopyPlugin,
    EnvPlugin,
    Sparky,
    QuantumPlugin,
} from "fuse-box";
import { TypeHelper } from "fuse-box-typechecker/dist/commonjs";
interface Opts {
    watch: boolean;
    production: boolean;
    clientBuild: boolean;
}

class Bundler {
    private fuse: FuseBox;
    private dirs = {
        homeDir: "src",
        output: "dist",
        js: "js",
        assets: {
            images: "assets/images",
        },
    };
    private ranTypeCheck = false;

    private opts: Opts = {
        watch: false,
        production: false, // Is this a build for production?
        clientBuild: false, // Is this the server build or the client build
    };

    private envVars = {
        NODE_ENV: "development",
        YEAR: new Date().getFullYear(),
    };

    public setProdMode = () => {
        this.opts.production = true;
        this.envVars.NODE_ENV = "production";
    };

    public setOpts = (v: Partial<Opts>) => {
        this.opts = { ...this.opts, ...v };
    };

    public bundle = async () => {
        this.runTypeCheck();
        this.fuse = FuseBox.init({
            experimentalFeatures: true,
            homeDir: this.dirs.homeDir,
            output: this.outDir,
            cache: !this.opts.production,
            target: this.opts.clientBuild ? "browser" : "server",
            alias: {
                common: "~/common",
                server: "~/server",
                stores: "~/stores",
                modules: "~/modules",
                client: "~/client",
            },
            plugins: [
                JSONPlugin(),
                CopyPlugin({
                    files: ["*.jpg", "*.svg", "*.png", "*.ico", "*.gif"],
                    useDefault: true,
                    resolve: `/${this.dirs.assets.images}`,
                    dest: this.opts.clientBuild
                        ? `../${this.dirs.assets.images}`
                        : `public/${this.dirs.assets.images}`,
                }),
                EnvPlugin(this.envVars),
                this.opts.production
                    ? QuantumPlugin({
                          uglify: true,
                          manifest: true,
                          treeshake: true,
                          target: this.opts.clientBuild ? "browser" : "server",
                          removeExportsInterop: false,
                          hoisting: { names: ["React", "ReactDOM", "tslib"] },
                          warnings: false,
                          bakeApiIntoBundle: this.opts.clientBuild
                              ? "vendor"
                              : "server",
                      })
                    : {},
            ],
        });

        if (this.opts.clientBuild) {
            this.fuse
                .bundle(`vendor`)
                .instructions(
                    "~client/index.tsx",
                );

            const client = this.fuse.bundle(`client`);
            client.instructions(
                `> [client/index.tsx]`,
            );

            if (this.opts.watch && !this.opts.production) {
                this.fuse.dev({ hmr: true, httpServer: false });
                client.hmr().watch();
            }

        } else {
            const server = this.fuse.bundle("server");

            server.instructions(
                ` > [server/index.tsx] +process`,
            );

            if (this.opts.watch) {
                // tslint:disable-next-line:no-unused-expression
                !this.opts.production && server.watch("*");
                server.completed(proc => proc.start());
            }
        }

        return this.fuse.run();
    };

    private get outDir() {
        return this.opts.clientBuild
            ? `${this.dirs.output}/public/js/$name.js`
            : `${this.dirs.output}/$name.js`;
    }

    private runTypeCheck = () => {
        if (this.ranTypeCheck) {
            return;
        }
        this.ranTypeCheck = true;
        const typecheck = TypeHelper({
            tsConfig: "./tsconfig.json",
            basePath: "./",
            tsLint: this.opts.production ? undefined : "./tslint.json",
            throwOnSyntactic: this.opts.production,
            throwOnSemantic: this.opts.production,
            yellowOnLint: true,
        });
        if (this.opts.production) {
            typecheck.runSync();
        } else {
            typecheck.runWatch("./src");
        }
    };
}

/**
 * Tasks
 */

const bundler = new Bundler();

Sparky.task("clean", () => Sparky.src("dist/").clean("dist/"));
Sparky.task("production", bundler.setProdMode);
Sparky.task("watch", () => bundler.setOpts({ watch: true }));
Sparky.task("bundle", async () => {
    await bundler.bundle();
    bundler.setOpts({ clientBuild: true });
    return bundler.bundle();
});

Sparky.task("default", ["clean", "watch", "bundle", "finalize"], () => null);
// Sparky.task(
//     "prod-build",
//     ["clean", "production", "bundle", "finalize"],
//     async () => {},
// );

// Sparky.task(
//     "prod-test",
//     ["clean", "watch", "production", "bundle", "finalize"],
//     async () => {},
// );
