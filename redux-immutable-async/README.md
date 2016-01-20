### redux 的api

### createStore



    @param function reducer

    @param Object initialState


createStore() 调用时会dispatch 一个action,得到一个initialState
如果reducer是一个combineReducer initialState是一个key 和 combineReducer
相同的集合

### dispatch


    @param Object action

    @returns action

dispatch接收一个action，调用reducer更新的State，返回action

### combineReducers

    @param Object reducer
    @return function(state={}, action)


combineReducers返回了一个function(state={}, action)
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























