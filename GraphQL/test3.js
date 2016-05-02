var compose = function() {
    var funcs = arguments;
    return function() {
        var args = arguments,
            length = funcs.length;
        while (length--) {
            args = [funcs[length].apply(this, args)];
        }
        return args[0];
    };
};


function a(x) {
    console.log(2)
    return x + 10
}

function b(y) {
    console.log(1)
    return y + 20
}


var c = compose(a, b);
var d = c(2);
console.log(d);


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
