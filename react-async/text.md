applayMiddleware({thunk, api})(createStore)

```
    
    export default function applyMiddleware(...middlewares) {
        return (createStore) => (reducer, preloadedState, enhancer) => {
            const store = createStore(reducer, preloadedState, enhancer)
            let dispatch = store.dispatch
            let chain = []

            const middlewareAPI = {
                getState: store.getState,
                dispatch: (action) => dispatch(action)
            }
            chain = middlewares.map(middleware => middleware    (middlewareAPI))
            dispatch = compose(...chain)(store.dispatch)
            /*
                
            
            
            */ 

            return {
                ...store,
                dispatch
        }
  }
```


