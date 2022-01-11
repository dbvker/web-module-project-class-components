import React from 'react';

class Todo extends React.Component {
    handleClick = () => {
        this.props.handleToggleItem(this.props.item)
    }

    render() {
        return (
            <div onClick={this.handleClick} className={`todo-item${this.props.item.completed ? ' completed' : ''}`}>
                <p>{this.props.item.task}</p>
            </div>
        );
    }
}

export default Todo;