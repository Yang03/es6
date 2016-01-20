import React, { PropTypes, Component } from 'react'

export default class Posts extends Component {
    render() {
        return (
            <ul>
                {this.props.posts.map((post, i) =>
                         <li key={i}>{post.get('title')}</li>
                    )}
            </ul>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

//{this.props.posts.map((post, i) => {
//        console.log(post)
//        return <li key={i}>{post.get('title')}</li>
//    }
//    )}