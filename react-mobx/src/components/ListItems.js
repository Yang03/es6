import React from 'react'
import {observer} from 'mobx-react'
import Items from './Items'

import DevTool from 'mobx-react-devtools'

@observer
export default class ListItems extends React.Component {
    componentDidMount() {
        const redditStore = this.props.redditStore
	}
	render() {
		const {redditStore} = this.props;
		return (
			<div>
				<DevTool />
				<Items redditStore= {redditStore}/>
			</div>
		);
	}
}
