import {createStore} from './lib/createStore'
import combineReducers from './lib/combineReducers'
import applyMiddleware from './lib/applyMiddleware'
import thunkMiddleware from './lib/thunk'


function count(state = {count: 0}, action) {
    switch (action.type) {
        case 'add':
            return Object.assign({}, state, {count: action.count + 1})
            break;
        case 'decrease':
            return Object.assign({}, state, {count: action.count - 1})
            break;
        case 'before':
            return {state: 'start'}
            break;
        default:
            return state
    }
}
const store = createStore(count)

// store.subscribe(function () {
//   console.log('count: ', store.getState().count);
// })
//
const action = {type: 'add', count: 1}

// store.dispatch(action)
// console.log(store.getState())
// store.dispatch(action)
// store.dispatch(action)


function asyncFn () {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            resolve({count:2})
        }, 1000)
    })
}

function addAsync() {
     return dispatch => {
        return asyncFn().then( (data) => dispatch({type: 'add', count: data.count}))
     }
}

// asyncFn().then(function(data){
//     console.log(data)
// })

// const rootReducer = combineReducers({
//   count
// })



const asyncStore = createStore(
  count,
  applyMiddleware(
    thunkMiddleware
  )
)
console.log(asyncStore)
/*
    asyncStore.dispatch = function(action) {
        action(dispatch, getState, extraArgument)
    }
    function(dispatch) {
        eturn asyncFn().then( (data) => dispatch({type: 'add', count: data.count}))
    }


*/
asyncStore.dispatch(addAsync()).then(()=>{
    console.log(asyncStore.getState())
})
