import React from "react"

class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <li>
          <input 
            type="checkbox" 
            checked={this.props.todo.completed}
            onChange={() => this.props.toggle(this.props.todo.id)} 
          />
          {this.props.todo.title}
          <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>
            Delete
          </button>
        </li>
      </div>
    )
  }
}

export default TodoItem;