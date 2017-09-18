import React, { Component} from 'react'
import { connect } from 'react-redux'
import { loadReddit } from '../action'

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //console.log('componentDidMount')
        //console.log(this.props)
        const { dispatch } = this.props
        //console.log(dispatch) 
        dispatch(loadReddit('mobx'))

    }
    render() {
        console.log(this.props)
       return (
           <div>yp</div>
       )
    }
}



// 这个方法会先自执行一次，先于componentDidMount
// 没错dispatch 的时候会执行一次，更新state, 同时会更新component的state
function mapStateToProps(state) {
   // console.log(state)
    return {...state}
}



export default connect(mapStateToProps)(App)