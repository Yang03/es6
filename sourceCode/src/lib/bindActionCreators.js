function bindActionCreator(actionCreator, distpath) {
    return (...args) => distpath(actionCreator(...args))
}

export default function  bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') {
        return  bindActionCreator(actionCreators, dispatch)
    }

    var keys = Object.keys(actionCreators)
    var boundActionCreators = {}
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        var actionCreator = actionCreators[key]
        if (typeof actionCreator === 'function') {
         boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
       }
     }
    return boundActionCreators
}

/*
    传递action 和  dispatch 返回一个函数 dispatch(fn())
     传递一个 actionCreators 返回一个结合
     {
        'a' : dispatch(fn())
    }

*/
