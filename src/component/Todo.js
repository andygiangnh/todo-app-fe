import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../redux/actions'
import styled from 'styled-components'

const divStyle = {
  display: 'flex',
  alignItems: 'center'
}

const Span = styled.span`
  flex: 1;
  margin-right: 10px
`

const Button = styled.button `
  width: 20px,
  float: right
`

const Todo = ({todo, onToggle, onDelete}) => {
  return (
    <li className='todo-container'>
      <div style={divStyle}>
        <input className='todo-checkbox'
          onChange={() => onToggle(todo)}
          type="checkbox"
          checked={todo.completed}/>
        <Span>{todo.description}</Span>
        <Button onClick={() => onDelete(todo.id)}>X</Button>
      </div>
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