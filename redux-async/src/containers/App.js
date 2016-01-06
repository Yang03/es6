import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../action/actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class App extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        //console.log('componentDidMount')
        //console.log(this.props)
        const { dispatch, selectedReddit } = this.props
       // console.log(fetchPostsIfNeeded(selectedReddit));
        //console.log(dispatch)

        //dispatch 已经被thunkMiddleware 改写
        dispatch(fetchPostsIfNeeded(selectedReddit))

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedReddit !== this.props.selectedReddit) {
            const { dispatch, selectedReddit } = nextProps
            dispatch(fetchPostsIfNeeded(selectedReddit))
        }
    }

    handleChange(nextReddit) {
        this.props.dispatch(selectReddit(nextReddit))
    }

    handleRefreshClick(e) {
        e.preventDefault()

        const { dispatch, selectedReddit } = this.props
        dispatch(invalidateReddit(selectedReddit))
        console.log(fetchPostsIfNeeded(selectedReddit))
        dispatch(fetchPostsIfNeeded(selectedReddit))
        console.log(dispatch);
        dispatch(function(dispatch, getState){
            console.log(dispatch);
            console.log(getState);
        })
    }


    render() {
        //console.log(this.props)
        const { selectedReddit, posts, isFetching, lastUpdated } = this.props
        return (
            <div>
                <Picker value={selectedReddit}
                    onChange={this.handleChange}
                    options={[ 'reactjs', 'frontend' ]} />
                <p>
          {lastUpdated &&
          <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
          </span>
              }
          {!isFetching &&
          <a href="#"
              onClick={this.handleRefreshClick}>
              Refresh
          </a>
              }
                </p>
        {isFetching && posts && posts.length === 0 &&
        <h2>Loading...</h2>
            }
        {!isFetching && posts && posts.length === 0 &&
        <h2>Empty.</h2>
            }
        {posts && posts.length > 0 &&
        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
        </div>
            }
            </div>
        )
    }
}

App.propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

// 这个方法会先自执行一次，先于componentDidMount
// 没错dispatch 的时候会执行一次，更新state, 同时会更新component的state
function mapStateToProps(state) {
    const { selectedReddit, postsByReddit } = state
    const {
        isFetching,
        lastUpdated,
        item: posts
        } = postsByReddit[selectedReddit] || {
        isFetching: true,
        item: []
    }

    return {
        selectedReddit,
        posts,
        isFetching,
        lastUpdated
    }
}

console.log(App);

export default connect(mapStateToProps)(App)