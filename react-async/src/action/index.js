import { CALL_API } from '../middleware/api'

export const REDDIT_REQUEST = 'REDDIT_REQUEST'
export const REDDIT_SUCCESS = 'REDDIT_SUCCESS'
export const REDDIT_FAILURE = 'REDDIT_FAILURE'


const fetchRddit = (name) => ({
    name,
    [CALL_API]: {
        types: [REDDIT_REQUEST, REDDIT_SUCCESS, REDDIT_FAILURE],
        name: name    
    }
})

export const loadReddit = (name) => {

    return  (dispatch, getState) => {
    
        return dispatch(fetchRddit(name))
    }
}