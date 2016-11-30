### createStore
```
    function createStore(reducer, initialState) {
        var currentReducer = reducer
        var currentState = initialState
        var currentListeners = []
        var nextListeners = currentListeners
        var isDispatching = false

        function ensureCanMutateNextListeners() {
           if (nextListeners === currentListeners) {
             nextListeners = currentListeners.slice() //创建了一个新对象
           }
        }

        function getState() {
            return currentState
        }

        function subscribe(listener) {
            if (typeof listener !== 'function') {
              throw new Error('Expected listener to be a function.')
            }

            var isSubscribed = true

            ensureCanMutateNextListeners()
            nextListeners.push(listener)

            return function unsubscribe() {
              if (!isSubscribed) {
                return
              }

              isSubscribed = false

              ensureCanMutateNextListeners()
              var index = nextListeners.indexOf(listener)
              nextListeners.splice(index, 1)
            }
      }

      function dispatch(action) {
          if (isDispatching) {
              throw new Error('error')
          }

          try {
              isDispatching = true
              currentState = currentReducer(currentState, action)
          } finally {
              isDispatching = false
          }
          var listeners = currentListeners = nextListeners
          for (var i = 0; i < listeners.length; i++) {
             var listener = listeners[i]
             listener()
          }
          return action
      }
      return {
          subscribe,
          dispatch,
          getState
      }
    }
```
这个方法最少两个参数： reducer, initialState, 暴露了三个主要的接口，subscribe, dispatch, getState
* subscribe 监听
* dispatch 触发事件
* getState 获得状态



```


    enhancer = applyMiddleware(middleware)

    enhancer = function(createStore) {
        middlewares = function ({dispatch, getState}){
        	return function(next) {
        		return function(action) {
                        if (typeof action === 'function') {
                          return action(dispatch, getState, extraArgument);
                        }

                        return next(action);
                    }
        	}
        }
        return function(reducer, preloadedState, enhancer) {
			var store = createStore(reducer, perloadedState, enhancer)
			var dispatch = store.dispatch
			var chain = []

			var middlewareAPI = {
		         getState: store.getState,
		         dispatch: (action) => dispatch(action)
        	}
            chain = middlewares.map(middleware => middleware(middlewareAPI))
            dispatch = compose(...chain)(store.dispatch)

            return {
    	         ...store,
    	         dispatch
            }

		}
    }

    store = createStore(reducer, enhancer)

    store = enhancer(createStore)(reducer, preloadedState)



```
