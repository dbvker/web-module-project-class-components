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
            <form>
                <input onChange={this.handleChanges} value={this.state.input} type='text' name='item' placeholder="Add a task" /><br />
                <button onClick={this.handleAdd}>Add Task</button>
                <button onClick={this.handleClear}>Clear Completed</button>
            </form>
        )
    };
};

export default TodoForm;