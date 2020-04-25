import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todoReducer from './todoReducer'

export default combineReducers({ 
    todos: todoReducer, visibilityFilter })