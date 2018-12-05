// import cx from "classnames";
import React, { Component } from "react";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
    this.input = React.createRef();
  }

  addItem = () => {
    if (this.input.current.value) {
      this.setState({
        todos: this.state.todos.concat({
          text: this.input.current.value,
          isDone: false
        })
      });
      this.input.current.value = "";
    }
  };

  setDone = key => {
    let todos = this.state.todos;
    todos[key].isDone = !todos[key].isDone;
    this.setState({ todos });
  };

  render() {
    return (
      <>
        <div>
          <h2>Todo List</h2>
          <input ref={this.input} />
          <button onClick={this.addItem}>Done</button>
          <div className="task-counter">
            {this.state.todos.filter(i => i.isDone).length + " "}
            remaining out of {this.state.todos.length} tasks
          </div>
          <ul>
            {Object.keys(this.state.todos).map(i => (
              <li
                key={i}
                className={this.state.todos[i].isDone ? "is-done" : ""}
                onClick={() => {
                  this.setDone(i);
                }}
              >
                {this.state.todos[i].text}
              </li>
            ))}
          </ul>
        </div>
        <style>{`
        .is-done {
          text-decoration: line-through;
        }
      `}</style>
      </>
    );
  }
}
