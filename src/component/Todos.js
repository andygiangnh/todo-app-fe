import React, { Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { getTodosByVisibilityFilter } from '../redux/selectors'
import { loadingTodos } from '../redux/actions'

class Todos extends Component {

  componentDidMount() {
    this.props.retrieveTodos()
  }
    
  render() {
    const { todos, loading, error } = this.props
    return (
      <>
        {loading? <span>Loading todos...</span> :
          <ul className="todo-list">
            {todos && todos.length ? todos.map(todo => (
              <Todo key={todo.id} todo={todo}/>
            )) : 'No todos!'}
          </ul>
        }
        {error && <span>{error}</span>}
      </>
    )
  }  
}

const mapStateToProps = state => {
  const { visibilityFilter } = state
  return {
    todos: getTodosByVisibilityFilter(state, visibilityFilter),
    loading: state.todos.loading?.retrieve,
    error: state.todos.error?.retrieve
  }
}

const mapDispatchToProps = dispatch => (
  {retrieveTodos: () => dispatch(loadingTodos())}
)

export default connect(mapStateToProps, mapDispatchToProps)(Todos)

// is equivalant to: connect(mapStateToProps, { loadingTodos })(Todos)
