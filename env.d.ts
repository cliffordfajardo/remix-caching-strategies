/// <reference types="@remix-run/node" />
/// <reference types="vite/client" />
import type { QueryClient } from "@tanstack/query-core";
import type { LRUCache } from "lru-cache";



declare module "@remix-run/node" {
    interface AppLoadContext {
        queryClient: QueryClient;
        
        // TODO: add types
        lruCache: LRUCache<{}, {}, unknown>;
    }
}