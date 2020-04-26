import {
  SET_FILTER,
  ADD_TODO_STARTED, ADD_TODO_SUCCESS, ADD_TODO_FAILURE,
  RETRIEVE_TODOS, RETRIEVE_TODOS_SUCCESS, RETRIEVE_TODOS_FAILURE,
  DELETE_TODO_STARTED, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE,
  TOGGLE_TODO_STARTED, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAILURE
} from './actionTypes'
import API from './api'

// example of using async, await
export const addTodo = text => async dispatch => {
  dispatch(addTodoStarted());

  try {
    const res = await API.post('todos', {
      id: 0,
      description: text,
      completed: false
    })
    dispatch(addTodoSuccess(res.data))
  } catch (err) {
    dispatch(addTodoFailure(err.message))
  }
}

export const retrieveTodos = () => async dispatch => {
  dispatch(loadingTodos())

  try {
    const res = await API.get('todos')
    dispatch(retrieveTodosSuccess(res.data))
  } catch (err) {
    dispatch(retrieveTodosFailure(err.message))
  }
}

export const toggleTodo = todo => async dispatch => {
  dispatch(toggleTodoStarted())

  try {
    const res = await API.put(`todos/${todo.id}`, {
      ...todo, completed: !todo.completed
    })
    dispatch(toggleTodoSuccess(res.data))
  } catch (err) {
    dispatch(toggleTodoFailure(err.message))
  }
}

// example of using Promise
export const deleteTodo = id => dispatch => {
  dispatch(deleteTodoStarted())

  API.delete(`todos/${id}`)
    .then(res => {
      dispatch(deleteTodoSuccess(res.data))
    })
    .catch(err => {
      dispatch(deleteTodoFailure(err.message))
    })
}

const addTodoStarted = () => ({
  type: ADD_TODO_STARTED
})

const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo
  }
})

const addTodoFailure = error => ({
  type: ADD_TODO_FAILURE,
  payload: {
    error
  }
})

const loadingTodos = () => ({
  type: RETRIEVE_TODOS
})

const retrieveTodosSuccess = todos => ({
  type: RETRIEVE_TODOS_SUCCESS,
  payload: {
    todos
  }
})

const retrieveTodosFailure = error => ({
  type: RETRIEVE_TODOS_FAILURE,
  payload: {
    error
  }
})

const toggleTodoStarted = () => ({
  type: TOGGLE_TODO_STARTED
})

const toggleTodoSuccess = todo => ({
  type: TOGGLE_TODO_SUCCESS,
  payload: { todo }
})

const toggleTodoFailure = error => ({
  type: TOGGLE_TODO_FAILURE,
  payload: { error }
})

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
})

const deleteTodoStarted = () => ({
  type: DELETE_TODO_STARTED
})

const deleteTodoSuccess = id => ({
  type: DELETE_TODO_SUCCESS,
        payload: { id }
})

const deleteTodoFailure = error => ({
  type: DELETE_TODO_FAILURE,
        payload: { error }
})