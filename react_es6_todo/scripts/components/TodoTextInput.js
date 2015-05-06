import React from 'react';

//var  ReactPropTypes = React.PropTypes;

const ENTER_KEY_CODE = 13;

 class TodoTextInput  extends React.Component{
     constructor(props) {
         super(props);
         this.state = {value: props.value || ''};
     }
     tick(val){
         this.setState({value:val});
     }
    render(){
        return (
            <div>
            <input type="text"
                onBlur= {this._save.bind(this)}
                value = {this.state.value}
                onChange={this._onChange.bind(this)}
                onKeyDown={this._onKeyDown.bind(this)}
            />
            </div>
        )
    }
    _save(){
        this.props.onSave(this.state.value);
        this.setState({
            value: ''
        })
    }
    _onChange(){
        this.tick(event.target.value);
    }
    _onKeyDown(){
        if (event.keyCode === ENTER_KEY_CODE) {
            this._save();
        }
    }
}
export default TodoTextInput;