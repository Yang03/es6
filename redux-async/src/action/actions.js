import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'


export function selectReddit(reddit) {
    return {
        type: SELECT_REDDIT,
        reddit
    }
}

export function invalidateReddit(reddit) {
    return {
        type: INVALIDATE_REDDIT,
        reddit
    }
}

export function requestPosts(reddit) {
    return {
        type: REQUEST_POSTS,
        reddit
    }
}

export function receivePosts(reddit, json) {
    console.log('end')
    return {
        type: RECEIVE_POSTS,
        reddit: reddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }

}

export function fetchPosts(reddit) {
    console.log('satrt')
    return dispatch => {
        // dispatch 通过参数传递进来，通知组建请求发起了
        dispatch(requestPosts((reddit)))
        return fetch(`http://www.reddit.com/r/${reddit}.json`).then(
                response => response.json()
            //通知数据已经获取，更新state
        ).then(json=> dispatch(receivePosts(reddit, json)));
    }
}

export function shouldFetchPosts(state, reddit) {
    const posts = state.postsByReddit[reddit]
    if(!posts) {
        return true
    }
    if (posts.isFetching) {
        return false
    }
    return posts.didInvalidate
}

export function fetchPostsIfNeeded(reddit) {
    // dispatch 传进来
    return (dispatch, getState) => {
        // 判断是否需要去fetch
        if(shouldFetchPosts(getState(), reddit)) {

            return dispatch(fetchPosts(reddit))
        }
    }
}

/*
* redux 里面的dispatch 会调用Reducer 更新state;
* return action
* */