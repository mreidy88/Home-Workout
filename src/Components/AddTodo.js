import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {value: this.props.todoText}

        this.handleChange = this.handleChange.bind(this);
        this.toDoInput = this.toDoInput.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    toDoInput(todo) {
        if(todo.length > 0) {
        this.props.toDoInput(todo);
        this.setState({value: ''})
    }
}
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button className="main button" onClick={() => this.toDoInput(this.state.value)}>Submit</button>
            </div>
        );
    }
}

export default AddTodo;