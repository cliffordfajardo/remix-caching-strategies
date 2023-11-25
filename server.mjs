// @ts-check
import {
  unstable_createViteServer,
  unstable_loadViteServerBuild,
} from "@remix-run/dev";
import { createRequestHandler } from "@remix-run/express";
import { installGlobals } from "@remix-run/node";
import express from "express";
import {createQueryClient} from './server/query.js'
import { createLRUCache } from './server/lru-cache.js'

installGlobals();

let vite =
  process.env.NODE_ENV === "production"
    ? undefined
    : await unstable_createViteServer();

const app = express();

// handle asset requests
if (vite) {
  app.use(vite.middlewares);
} else {
  app.use(
    "/build",
    express.static("public/build", { immutable: true, maxAge: "1y" })
  );
}
app.use(express.static("public", { maxAge: "1h" }));

// handle SSR requests
app.all(
  "*",
  createRequestHandler({
    build: vite
      // @ts-ignore
      ? () => unstable_loadViteServerBuild(vite)
      // @ts-ignore
      : await import("./build/index.js"),
      getLoadContext(){
        return { 
          queryClient: createQueryClient(), 
          lruCache: createLRUCache()
        };
      }
  })
);

const port = 3000;
app.listen(port, () => console.log("http://localhost:" + port));
