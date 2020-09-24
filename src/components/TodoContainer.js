import React from "react"
import TodoList from './TodoList';
import Input from './Input';
import Example from './Hookah';
class TodoContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      next_id: 4,
      todos: [
         {
           id: 1,
           title: "make todo container",
           completed: true
         },
         {
           id: 2,
           title: "create redux middleware",
           completed: false
         },
         {
           id: 3,
           title: "make production build",
           completed: false
         }
      ]
    };    
  }

  deleteTodo = (id) => {
    let new_todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos: new_todos});
  }

  addTodo = (todo_title) => {
    let todo = {id: this.state.next_id, title: todo_title, completed: false};
    let new_todos = [... this.state.todos, todo];
    this.setState({todos: new_todos}, () => { this.setState({next_id: this.state.next_id + 1}) });
  }

  toggle = (id) => {
    let new_todos = this.state.todos.map(todo => { 
      if (todo.id === id) { 
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: new_todos});    
  }


  render() {
    return (
      <div>
        <Input append={this.addTodo} /> 
        <TodoList 
          todos={this.state.todos} 
          toggle={this.toggle} 
          deleteTodo={this.deleteTodo}
        />
      </div>
    )
  }
}
export default TodoContainer