import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
        };
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
        console.log(e.target.value)
    };

    handleAdd = e => {
        e.preventDefault()
        this.props.handleAddItem(this.state.input);
        this.setState({
            input: ''
          });
    };

    handleClear = e => {
        e.preventDefault()
        this.props.handleClearItem(this.props.item);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleAdd}>
                    <input onChange={this.handleChanges} value={this.state.input} type='text' name='item' placeholder="Add a task" />
                    <button>Add Task</button>
                    
                </form>
                <button onClick={this.handleClear}>Clear Completed</button>
            </div>
        )
    };
};

export default TodoForm;