import React from 'react'

const Todo = ({todo, onToggle, onDelete}) => {
  return (
    <li class='todo-container'>
    <input class='todo-checkbox'
      onChange={onToggle}
      type="checkbox"
      checked={todo.checked}
    />
    <span class='todo-text'>{todo.text}</span>
    <button class='todo-delete' onClick={onDelete}>X</button>
  </li>
  )
}

export default Todo