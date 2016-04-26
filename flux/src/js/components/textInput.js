import React from 'react'

const ENTER_KEY_CODE = 13

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value || ''}
    }
    tick(val){
        this.setState({value:val})
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
        this.props.onSave(this.state.value)
        this.setState({
            value: ''
        })
    }
    _onChange(event){
        this.tick(event.target.value)
    }
    _onKeyDown(event){
        if (event.keyCode === ENTER_KEY_CODE) {
            this._save()
        }
    }
}


