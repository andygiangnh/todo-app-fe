import React from 'react'
import Todo from './Todo'
import {VISIBILITY_FILTERS} from '../constants'

export default function Todos({todos, onDelete, onToggle, filter}) {
    return (
        <ul class="todo-list">
          {todos.filter(todo => {
              return filter === VISIBILITY_FILTERS.ALL ||
                (filter === VISIBILITY_FILTERS.COMPLETED && todo.checked === true) ||
                (filter === VISIBILITY_FILTERS.INCOMPLETED && todo.checked === false)

          }).map(todo => (
            <Todo
              todo={todo}
              onDelete={() => onDelete(todo.id)}
              onToggle={() => onToggle(todo.id)}
            />
          ))}
        </ul>
    )
}
