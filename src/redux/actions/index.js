import { SET_FILTER,
    ADD_TODO_STARTED, ADD_TODO_SUCCESS, ADD_TODO_FAILURE,
    RETRIEVE_TODOS, RETRIEVE_TODOS_SUCCESS, RETRIEVE_TODOS_FAILURE,
    DELETE_TODO_STARTED, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE,
    TOGGLE_TODO_STARTED, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAILURE } from './actionTypes'
import axios from 'axios'

export const addTodo = text => {
    return dispatch => {
        dispatch(addTodoStarted());

        axios.post('http://localhost:9090/todos', {
            id: 0,
            description: text,
            completed: false
        })
        .then(res => {
            dispatch(addTodoSuccess(res.data))
        })
        .catch(err => {
            dispatch(addTodoFailure(err.message))
        })
    }    
}

export const retrieveTodos = () => {
    return dispatch => {
        dispatch(loadingTodos())

        axios.get('http://localhost:9090/todos')
        .then(res => {
            dispatch(retrieveTodosSuccess(res.data))
        })
        .catch(err => {
            dispatch(retrieveTodosFailure(err.message))
        })
    }
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

export const toggleTodo = todo => dispatch => {
    dispatch({
        type: TOGGLE_TODO_STARTED
    })
    
    axios.put(`http://localhost:9090/todos/${todo.id}`,{
        ...todo, completed: !todo.completed
    })
    .then(res => {
        dispatch({
            type:TOGGLE_TODO_SUCCESS,
            payload: { todo: res.data }
        })
    })
    .catch(err => {
        dispatch({
            type:TOGGLE_TODO_FAILURE,
            payload: { error: err.message }
        })
    })

}

export const deleteTodo = id => dispatch => {
    dispatch({
        type: DELETE_TODO_STARTED
    })
    axios.delete(`http://localhost:9090/todos/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_TODO_SUCCESS,
            payload: { id: res.data }
        })
    })
    .catch(err => {
        dispatch({
            type: DELETE_TODO_FAILURE,
            payload: { error: err.message }
        })
    })    
}

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
})