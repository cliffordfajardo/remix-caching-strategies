import { LRUCache } from 'lru-cache'

export const createLRUCache = () => {
    return new LRUCache({
        ttl: 100,
        fetchMethod: async (url, oldValue, { signal }) => {
            const res = await fetch(url, { signal })
            return await res.json()
        },
    })
}
