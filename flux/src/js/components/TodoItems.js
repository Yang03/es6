import React from 'react'

export default class TodoItems extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (Object.keys(this.props.allTodos).length < 1) {
            return null;
        }

        var allTodos = this.props.allTodos;
        var todos = [];
        //console.log(allTodos);
        for (var key in allTodos) {
            todos.push(<li key={key}>{allTodos[key].text}</li>);
        }
        return (
            <ul id="todo-list">{todos}</ul>
        )

    }
}
