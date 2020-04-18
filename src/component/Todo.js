import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../redux/actions'

const Todo = ({todo, onToggle, onDelete}) => {
  return (
    <li className='todo-container'>
    <input className='todo-checkbox'
      onChange={() => onToggle(todo.id)}
      type="checkbox"
      checked={todo.checked}
    />
    <span className='todo-text'>{todo.text}</span>
    <button className='todo-delete' onClick={() => onDelete(todo.id)}>X</button>
  </li>
  )
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onToggle: (id) => {
            dispatch(toggleTodo(id))
        },
        onDelete: (id) => {
            dispatch(deleteTodo(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(Todo)