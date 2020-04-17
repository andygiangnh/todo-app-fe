import React from "react";
import "./styles.css";
import TodoHeader from './component/TodoHeader'
import NewTodoForm from './component/NewTodoForm'
import Todos from './component/Todos'
import VisibilityFilter from "./component/VisibilityFilter";

let idSeq = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      filter: 'all'
    };
  }

  addTodo(text) {
    this.setState({...this.state,
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
    this.setState({...this.state,
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleTodo(id) {
    this.setState({
      ...this.state,
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

  updateFilter(filter) {
    this.setState({
      ...this.state,
      filter
    })
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
          <VisibilityFilter
            activeFilter={this.state.filter}
            onFilter={(filter) => this.updateFilter(filter)}/>
          <Todos todos={this.state.todos}
            onDelete={(id) => this.deleteTodo(id)}
            onToggle={(id) => this.toggleTodo(id)}
            filter={this.state.filter}/>>
        </div>
      </>
    );
  }
}

export default App;
