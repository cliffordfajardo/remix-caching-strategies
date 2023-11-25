import { QueryClient} from "@tanstack/query-core"

export const createQueryClient = () => new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Number.POSITIVE_INFINITY,
        }
    }
})