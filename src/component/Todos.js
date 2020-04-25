import React, { Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { getTodosByVisibilityFilter } from '../redux/selectors'
import { retrieveTodos } from '../redux/actions'

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
              <Todo todo={todo}/>
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

const mapDispatchToProps = dispatch => {
  return {
    retrieveTodos: () => {
      dispatch(retrieveTodos())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
