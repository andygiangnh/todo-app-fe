import { ADD_TODO, TOGGLE_TODO, SET_FILTER, DELETE_TODO } from './actionTypes'

let idSeq = 0

export const addTodo = text => ({
    type: ADD_TODO,
    payload: {
        id: idSeq++,
        text
    }
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
})

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: { id }
})

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
})