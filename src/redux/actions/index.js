import {
  SET_FILTER,
  ADD_TODO_STARTED, ADD_TODO_SUCCESS, ADD_TODO_FAILURE,
  RETRIEVE_TODOS, RETRIEVE_TODOS_SUCCESS, RETRIEVE_TODOS_FAILURE,
  DELETE_TODO_STARTED, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE,
  TOGGLE_TODO_STARTED, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE,
  RESET_SIGNUP_FORM
} from './actionTypes'
import API from './api'

// example of thunk using async, await
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

// example of thunk using Promise
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

// register
export const register = user => async dispatch => {
  try {
    await API.post(`register`, user)
    dispatch(registerUserSuccess())
  } catch (err) {
    dispatch(registerUserFailure(err.response.data))
  }
}

export const resetSignupForm = () => ({
  type: RESET_SIGNUP_FORM
})

export const registerUserSuccess = () => ({
  type: REGISTER_USER_SUCCESS
})

export const registerUserFailure = (res) => ({
  type: REGISTER_USER_FAILURE,
  payload: {
    message: res.message,
    errors: res.errors
  }
})

export const addTodo = (description) => ({
  type: ADD_TODO_STARTED,
  payload: {
    description
  }
})

export const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo
  }
})

export const addTodoFailure = error => ({
  type: ADD_TODO_FAILURE,
  payload: {
    error
  }
})

export const loginSucceeded = (user) => ({
  type: LOGIN_SUCCESS,
  payload: { user }
})

export const loadingTodos = () => ({
  type: RETRIEVE_TODOS
})

export const retrieveTodosSuccess = todos => ({
  type: RETRIEVE_TODOS_SUCCESS,
  payload: {
    todos
  }
})

export const retrieveTodosFailure = error => ({
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