import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import todoApp from './reducer/reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('root')
render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
     </div>
    ,
        rootElement
)