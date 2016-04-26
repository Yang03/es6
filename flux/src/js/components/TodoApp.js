import React from 'react'
import Header from './Header'
import TodoItems from './TodoItems'
import Appstore from  '../stores/AppStore'

function getAllTodos () {
    return {
        allTodos: Appstore.getAll()
    }
}

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAllTodos();
    }
    tick(val) {
        this.setState(val)
    }
    componentDidMount() {
        Appstore.addChangeEventListener(this._onChange.bind(this))
    }
    componentWillUnmount(){
        Appstore.removeChangeEventListener(this._onChange.bind(this))
    }

    render(){
        return (
            <div>
                <Header/>
                <TodoItems allTodos={this.state.allTodos}/>
             </div>
        )
    }
    _onChange() {
        this.tick(getAllTodos())
    }
}
