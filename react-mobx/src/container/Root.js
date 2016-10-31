import React, {Component} from 'react'
import ListItems from '../components/ListItems'
import {observer} from 'mobx-react'


@observer
export default class Root extends Component {
    componentDidMount() {
        const {redditStore} = this.props
    }
    render() {
        const {redditStore} = this.props
        return (
            <ListItems redditStore={redditStore}/>
        )
    }
}
