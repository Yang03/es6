
import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
export default class Items extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
        const {redditStore} = this.props
        return (
            <ul>
                {redditStore.reddites.map((post, i) =>
                    <li key={i}>{post.data.title}</li>
                )}
            </ul>
        )
    }
}
