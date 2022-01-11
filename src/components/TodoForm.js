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
        console.log('add todo has been clicked')
    };

    handleClear = e => {
        e.preventDefault()
        this.props.handleClearItem(this.props.item);
    };

    render() {
        return (
            <form>
                <input onChange={this.handleChanges} type='text' name='item' placeholder="Add a task" />
                <button onClick={this.handleAdd}>Add Task</button>
                <button onClick={this.handleClear}>Clear Completed</button>
            </form>
        )
    };
};

export default TodoForm;