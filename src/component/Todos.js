import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { getTodosByVisibilityFilter } from '../redux/selectors'

const Todos = ({ todos }) => {
    return (
        <ul className="todo-list">
          {todos && todos.length ? todos.map(todo => (
            <Todo todo={todo}/>
          )) : 'No todos!'}
        </ul>
    )
}

const mapStateToProps = state => {
    const { visibilityFilter } = state
    return {todos: getTodosByVisibilityFilter(state, visibilityFilter)}
}

export default connect(mapStateToProps)(Todos)
