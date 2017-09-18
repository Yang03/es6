import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import api from '../middleware/api'
import rootReducer from '../reducers'
//import DevTools from '../containers/DevTools'
const createStoreWithMiddleware = applyMiddleware(
    thunk,
    api
)(createStore)


export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)
    //console.log(store);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

// const configureStore = preloadedState => {
//   const store = createStore(
//     rootReducer,
//     preloadedState,
//     compose(
//       applyMiddleware(thunk, api),
//      // DevTools.instrument()
//     )
//   )

//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../reducers', () => {
//       const nextRootReducer = require('../reducers').default
//       store.replaceReducer(nextRootReducer)
//     })
//   }

//   return store
// }

// export default configureStore