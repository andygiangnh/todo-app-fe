import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../redux/actions'

const Todo = ({todo, onToggle, onDelete}) => {
  return (
    <li className='todo-container'>
    <input className='todo-checkbox'
      onChange={() => onToggle(todo)}
      type="checkbox"
      checked={todo.completed}
    />
    <span className='todo-text'>{todo.description}</span>
    <button className='todo-delete' onClick={() => onDelete(todo.id)}>X</button>
  </li>
  )
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onToggle: (todo) => {
            dispatch(toggleTodo(todo))
        },
        onDelete: (id) => {
            dispatch(deleteTodo(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(Todo)