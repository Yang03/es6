/**
 * Created by baixing on 15/10/10.
 */

//
//import {test} from './index/index'
//
//test()


function combineReducers(reducers) {
   // console.log(reducers)
    var finalReducers = pick(reducers, (val) => typeof val === 'function')

    //console.log(finalReducers)
    var hasChange = false
    return function combination(state = {}, action) {
        var finalState = mapValues(finalReducers, (reducer, key)=> {
            /*
             * reducer fn
             * key
             * */
            var previousStateForKey = state[key]
            var nextStateForKey = reducer(previousStateForKey, action)
            console.log(previousStateForKey);
            console.log(nextStateForKey);
        })
    }
}

function pick(obj, fn) {
    return Object.keys(obj).reduce((result, key) => {
        if (fn(obj[key])) {
            result[key] = obj[key]
        }
        return result
    }, {})
}

function mapValues(obj, fn) {
    return Object.keys(obj).reduce((result, key) => {
        // console.log(result);
        //console.log(key);
        result[key] = fn(obj[key], key)
        return result
    }, {})
}

function testReducers(state = {}, action) {
    switch (action.type) {
        case 'del':
            return {'del': 1}
        default:
            return state
    }
}

function test2Reducers(state = {}, action) {
    switch (action.type) {
        case 'add':
            return {'add': 1}
        default:
            return state
    }
}

var c  = combineReducers({
    testReducers,
    test2Reducers
})
console.log(c);

//var ActionTypes = {
//    INIT: 'xx'
//}
//function assertReducerSanity(reducers) {
//    Object.keys(reducers).forEach(key => {
//        var reducer = reducers[key]
//        var initialState = reducer(undefined, {type: ActionTypes.INIT})
//        //console.log(initialState);
//    })
//}
//// c();
//c({'f': 'fr'}, {type: 'del'})
//assertReducerSanity(c);