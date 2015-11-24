import {crateStore, combineReducers} from 'redux'

import * as reducers from '../reducer/reducers'

let todoApp = combineReducers(reducers)

let store = createStore(todoApp)

