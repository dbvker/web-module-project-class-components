import React from 'react';
import './components/Todo.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todoList
    };
  }

  handleClearItem = () => {
    const newTodoList = this.state.todoList.filter(item => {
      return !item.completed;
    })
    this.setState({
      ...this.state,
      todoList: newTodoList
    });
  }

  handleAddItem = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newTask]
    });
  }

  handleToggleItem = task => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map(item => {
        if (item.id === task.id) {
          return ({
            ...item,
            completed: !item.completed
          })
        } else {
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList handleToggleItem={this.handleToggleItem} todoList={this.state.todoList} />
        <TodoForm handleClearItem={this.handleClearItem} handleAddItem={this.handleAddItem} />
      </div>
    );
  }
}

export default App;
