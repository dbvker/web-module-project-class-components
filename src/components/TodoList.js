// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todoList.map(item => (
                    <Todo handleToggleItem={this.props.handleToggleItem} key={item.id} item={item} />
                ))}
            </div>
        )
    }
}

export default TodoList;