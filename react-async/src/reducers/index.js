import * as ActionTypes from '../action'
import paginate from './paginate'

import { combineReducers } from 'redux'
const reddit = paginate({
    mapActionToKey: action => 'response',
    types: [
      ActionTypes.REDDIT_REQUEST,
      ActionTypes.REDDIT_SUCCESS,
      ActionTypes.REDDIT_FAILURE
    ]
})
const rootReducer = combineReducers({
    reddit
})
export default rootReducer