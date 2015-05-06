import React from 'react';
import Header from './Header';
import TodoItems from './TodoItems';
import AppStore from '../stores/AppStore';

function getAllTodo() {
    //console.log(AppStore.getAll());
    return {
        allTodos: AppStore.getAll()
    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAllTodo();
    }
    tick(val){
        this.setState(val);
    }
    componentDidMount() {
        //绑定事件
        AppStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
            <div>
                <Header />
                <TodoItems allTodos={this.state.allTodos}/>
            </div>
        )
    }

    _onChange() {
        //tick(event.target.value);
        this.tick(getAllTodo());
    }

}
export default TodoApp;


