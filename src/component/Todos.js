import React from 'react'
import Todo from './Todo'

export default function Todos({todos, onDelete, onToggle}) {
    return (
        <ul class="todo-list">
          {todos.map(todo => (
            <Todo
              todo={todo}
              onDelete={() => onDelete(todo.id)}
              onToggle={() => onToggle(todo.id)}
            />
          ))}
        </ul>
    )
}
