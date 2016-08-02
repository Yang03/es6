### redux 的api

### createStore



    @param function reducer

    @param Object initialState


createStore() 调用时会dispatch 一个action,得到一个initialState


### dispatch


    @param Object action

    @returns action

dispatch接收一个action，调用reducer更新的State，返回action
crateStore(fn:reducer, Object:initialState)

源码


    function createStore(reducer, initialState) {

      if (typeof reducer !== 'function') {

        throw new Error('Expected the reducer to be a function.')

      }

      var currentReducer = reducer
      // combineReducers返回了一个function(state={}, action)

      var currentState = initialState

      var listeners = []

      var isDispatching = false

       //......省略

       function dispatch(action) {

            //......省略
            currentState = currentReducer(currentState, action)
            //......省略

            return action
        }
    }
    
   
combineReducers返回了一个function(state={}, action)
```
    var hasChanged = false
    var nextState = {}
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i]
      var reducer = finalReducers[key]
      var previousStateForKey = state[key]
      var nextStateForKey = reducer(previousStateForKey, action) 
      //如果当前reducer直接返回state,此时 nextStateForKey===previousStateForKey 如:function add(state, action) {switch action.type {catch: 'xx': return Object.asign({},state, '1')} default: return state}
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action)
        throw new Error(errorMessage)
      }
      nextState[key] = nextStateForKey
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }
    return hasChanged ? nextState : state
```    

### bindActionCreators
    @param Object or function
    @param fun dispatch
    @returns Object or function

* 如果传入的是一个fn,返回的也是一个fn



    function (actionCreator, dispatch) {

        return (...args) => dispatch(actionCreator(...args))

    }

* 如果传入一个Object, 返回一个keys相同的对象，但是可以调用的，里面还是
dispatch 一个action


    xx: function() {

        return (...args) => dispatch(actionCreator(...args))

    }

### applyMiddleware

```
//var createStoreWithMiddleware = applyMiddleware({redux-thunk})(createStore);
// stroe = createStoreWithMiddleware(reducer, preloadedState);
// var  enhancer = applyMiddleware({redux-thunk})
// var  store = createStore(reducer, initialState, enhancer)
return (createStore) => (reducer, preloadedState, enhancer) => {
    var store = createStore(reducer, preloadedState, enhancer)
    //enhancer(createStore)(reducer, preloadedState)
    var dispatch = store.dispatch
    var chain = []

    var middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    }
    chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)  //重写了dispatch

    return {
      ...store,
      dispatch
    }
  }
```























