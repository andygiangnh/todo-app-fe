import React from "react";
import "./styles.css";
import TodoHeader from './component/TodoHeader'
import NewTodoForm from './component/NewTodoForm'
import Todo from './component/Todo'

let idSeq = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: idSeq++,
          text: text,
          checked: false
        }
      ]
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo.id !== id
          ? todo
          : {
              id: todo.id,
              text: todo.text,
              checked: !todo.checked
            };
      })
    });
  }

  render() {
    return (
      <>
      <div class="container center">
        <h1 class="center title">My TODO App</h1>
        <TodoHeader header={{totalCount:this.state.todos.length,
          uncheckedCount:this.state.todos.filter(todo => todo.checked === false).length
        }}/>
        <NewTodoForm onAdd={(text) => this.addTodo(text)}/>
        <ul class="todo-list">
          {this.state.todos.map(todo => (
            <Todo
              todo={todo}
              onDelete={() => this.deleteTodo(todo.id)}
              onToggle={() => this.toggleTodo(todo.id)}
            />
          ))}
        </ul>
      </div>
      </>
    );
  }
}

export default App;
