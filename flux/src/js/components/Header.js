import React from 'react'
import TextInput from './TextInput'
import TodoActions from '../actions/TodoActions'

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>to do</h1>
                <TextInput id="todo"  placeholder="What needs to be done?" onSave={this._onSave}/>
            </header>
        )
    }
    _onSave(text) {
        console.log(text);
        if(text.trim()) {
            TodoActions.create(text)
        }
    }
}

