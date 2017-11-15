import * as Hapi from "hapi";
import chalk from "chalk";
import "isomorphic-fetch";
import { handleAppRequest } from "./request";
import * as inert from "inert";
import { initPageStyles } from "common/styles";

process.on("unhandledRejection", (error: any) => {
    console.log("unhandledRejection", error.message, error);
});

const start = async () => {
    const server = new Hapi.Server({ port: 3000, host: "127.0.0.1" } as any); // TODO fix when new types released (v17)
    await server.register(inert);

    server.route({
        method: "*",
        path: "/{p*}",
        handler: handleAppRequest,
    });

    server.route({
        method: "GET",
        path: "/js/{file*}",
        handler: {
            directory: {
                path: "./dist/public/js",
            },
        },
    });

    initPageStyles();

    const err = await server.start();
    if (err) {
        throw err;
    }
    console.log(
        chalk.black.yellowBright(
            `\n\n👻  Server running at: ${server.info!.uri}`,
        ),
    );
};

try {
    start();
} catch (e) {
    console.error(e);
}
