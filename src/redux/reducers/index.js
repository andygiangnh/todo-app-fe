import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todoReducer from './todoReducer'
import userReducer from './userReducer'

export default combineReducers({ 
    todos: todoReducer, 
    visibilityFilter,
    user: userReducer 
})