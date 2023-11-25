## Tan stack query

Pros
- automatic retry logic
- request deduping
- well documented, maintained, lots of options

Cons:
- requires a little configuration to be used as a simple key-value store.  Is there a get & set API?
- has mutation logic in core, for cache, we don't need mutations.
    - https://sergiodxa.com/tutorials/abort-async-calls-inside-remix-loaders-and-actions
    - HOWEVER, the utility of mutations being in the library means, if a mutation occurs, we can revalidate our query cache, so there may be a usecase for it.

## LRU Cache
Pros
- simple get/set api
- background refetches


## Cache headers
- TODO: evaluate pros/cons, i think in terms of storing large API data and accessing data across app this is the least flexible


## TODO:
- create a single module for lru-cache and tanstackquery
- type safety for lru cache (casting a .get() is probably the easiest way)
- fork lru-cache, recreate, understand patterns
- fork tanstack-query, recreate a minimal version & understand patterns



## References
- https://sergiodxa.com/tutorials/use-tanstack-query-to-share-data-between-remix-loaders
- https://tanstack.com/query/v4/docs/react/comparison
- https://sergiodxa.com/tutorials/abort-async-calls-inside-remix-loaders-and-actions