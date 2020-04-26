import { put, takeLatest, spawn } from 'redux-saga/effects'
import API from '../actions/api'
import { retrieveTodosSuccess, retrieveTodosFailure,
    addTodoSuccess, addTodoFailure } from '../actions'
import { RETRIEVE_TODOS, ADD_TODO_STARTED } from '../actions/actionTypes'

// worker Saga
function* retrieveTodos() {
    try {
        const todos = yield API.get('todos')
            .then(res => res.data)
        
        yield put(retrieveTodosSuccess(todos))
    } catch (err) {
        yield put(retrieveTodosFailure(err.message))
    }
}

function* addTodo(action) {
    try {
        const newTodo = yield API.post('todos', {
            id: 0,
            description: action.payload.description,
            completed: false
          })
          .then(res => res.data)
        yield put(addTodoSuccess(newTodo))
    } catch (err) {
        yield put(addTodoFailure(err.message))
    }
}

// watcher
function* retrieveTodosSaga() {
    yield takeLatest(RETRIEVE_TODOS, retrieveTodos)
}

function* addTodoSaga() {
    yield takeLatest(ADD_TODO_STARTED, addTodo)
}

export default function* rootSaga() {
    yield spawn(retrieveTodosSaga)
    yield spawn(addTodoSaga)
} 
