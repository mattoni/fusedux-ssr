import * as Hapi from "hapi";
import { handleAppRequest } from "./request";
import * as inert from "inert";

const start = async () => {
    const server = new Hapi.Server();
    await server.register(inert);    
    server.connection({ port: 3000, host: '127.0.0.1' });
    server.route({
        method: '*',
        path: '/{p*}',
        handler: handleAppRequest,
    });

    server.route({  
        method: 'GET',
        path: '/js/{file*}',
        handler: {
          directory: { 
            path: './dist/public/js',
          }
        }
      })

    const err = await server.start();
    if (err) { throw err; }
    console.log(`Server running at: ${server.info!.uri}`);
}

try {
    start();
} catch (e) {
    console.error(e);
}
