import React from 'react';

class TodoItems extends React.Component {
    render(){
        if (Object.keys(this.props.allTodos).length < 1) {
            return null;
        }

        var allTodos = this.props.allTodos;
        var todos = [];

        for (var key in allTodos) {
            todos.push(<li key={key}>{allTodos[key].text}</li>);
        }
        return (
            <ul id="todo-list">{todos}</ul>
        )
    }
}
export default TodoItems;