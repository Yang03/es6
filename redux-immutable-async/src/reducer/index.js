import {combineReducers} from 'redux'
import { fromJS } from 'immutable'
import {SELECT_REDDIT, INVALIDATE_REDDIT, REQUEST_POSTS, RECEIVE_POSTS} from '../action/actions'

function selectedReddit(state = 'reactjs', action) {
    switch(action.type) {
        case SELECT_REDDIT:
            return action.reddit
        default:
            return state;
    }
}

const initState = fromJS({
    isFetching: false,
    didInvalidate: false,
    item: []
})

function posts(state = initState, action) {
    switch (action.type) {
        case INVALIDATE_REDDIT:
            return state.set(didInvalidate, false)
        case REQUEST_POSTS:
           return state.merge({
                didInvalidate: false,
                isFetching: true
            })
        case RECEIVE_POSTS:
            return  state.merge({
                isFetching: false,
                didInvalidate: false,
                item: action.posts,
                lastUpdated: action.receiveAt
            })
        default:
            return state
    }
}


function postsByReddit(state = fromJS({}), action) {
    switch (action.type) {
        case INVALIDATE_REDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return fromJS({
                [action.reddit]: posts(state[action.reddit], action)
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    postsByReddit,
    selectedReddit
})

/*
* rootReducer 是一个function
*
* */

export default rootReducer