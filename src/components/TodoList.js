import React from "react"
import TodoItem from './TodoItem';

class TodosList extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
            toggle = {this.props.toggle}
            deleteTodo = {this.props.deleteTodo}
          />
        ))}
      </div>
    )
  }
}

export default TodosList