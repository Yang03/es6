// function createThunkMiddleware(extraArgument) {
//   return ({ dispatch, getState }) => next => action => {
//     if (typeof action === 'function') {
//       return action(dispatch, getState, extraArgument);
//     }
//
//     return next(action);
//   };
// }

function createThunkMiddleware(extraArgument) {
    /*
    chain = middlewares.map(middleware => middleware(middlewareAPI))

    dispatch = function(action) {
        dispatch(action)
    }
    */
    return function ({dispatch, getState}) {
        /*
            store.dispatch
        */
        return function (next) {
            return function(action) {
                if (typeof action === 'function') {
                    /*
                        asyncFn

                        function(dispatch) {
	                        return asyncFn().then(function (data) {
            	               return dispatch({ type: 'add', count: data.count });
            	        });
            	    }

                    */
                  return action(dispatch, getState, extraArgument);
                }

                return next(action);
            }
        }
    }
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
