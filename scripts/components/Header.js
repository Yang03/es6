import React from 'react';
import TodoTextInput from './TodoTextInput';
import TodoActions from '../actions/TodoActions';

class  Header extends React.Component{
    render(){
        return(
            <header id="header">
                <h1>todo</h1>
                <TodoTextInput id="new-todo"  onSave={this._onSave}/>
            </header>
        );
    }
    // 此处是事件的入口，通过props向下传递
    _onSave(text){
        if(text.trim()){
            TodoActions.create(text);
        }
    }
}
export default Header;
