import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actionTypes'

const initialState = {
    todos: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                todos: [...state.todos, {...action.payload, checked: false}]
            }
        }
        case DELETE_TODO: {
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        }
        case TOGGLE_TODO: {
            return {
                todos: state.todos.map(todo => {
                    return todo.id !== action.payload.id
                      ? todo
                      : {
                          ...todo,
                          checked: !todo.checked
                        };
                })
            }
        }
        default:
            return state
    }
}