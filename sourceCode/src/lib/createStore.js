// export var ActionTypes = {
//   INIT: '@@redux/INIT'
// }
export  function createStore(reducer, preloadedState, enhancer) {
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState
    preloadedState = undefined
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.')
    }
    
    return enhancer(createStore)(reducer, preloadedState)
  }

    /* const enhancer = applyMiddleware(thunk, xx()) //return function(createStore)
       createStore(rootReducer, initialState,, enhancer)
    */

    // const createStoreWithMiddleware = applyMiddleware(
    //       thunk,
    //       createLogger()
    //     )(createStore);
    //
    // const store = createStoreWithMiddleware(reducer, initialState)

    var currentReducer = reducer
    var currentState = preloadedState
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
          listeners[i]()
      }
      return action
  }
  //dispatch({ type: ActionTypes.INIT })
  return {
      subscribe,
      dispatch,
      getState
  }


}
