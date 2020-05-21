import {
  ADD_TODO_STARTED, ADD_TODO_SUCCESS, ADD_TODO_FAILURE,
  RETRIEVE_TODOS, RETRIEVE_TODOS_SUCCESS, RETRIEVE_TODOS_FAILURE,
  DELETE_TODO_STARTED, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE,
  TOGGLE_TODO_STARTED, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAILURE
} from '../actions/actionTypes'

const initialState = {
  todos: [],
  loading: {},
  user: undefined,
  error: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_STARTED:
      return {
        ...state,
        loading: {
          ...state.loading,
          add: true
        }
      }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: {
          ...state.loading,
          add: false
        },
        error: {
          ...state.error,
          add: null
        },
      }
    }
    case ADD_TODO_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          add: false
        },
        error: {
          ...state.error,
          add: action.payload.error
        }
      }
    }
    case RETRIEVE_TODOS:
      return {
        ...state,
        loading: {
          ...state.loading,
          retrieve: true
        }
      }
    case RETRIEVE_TODOS_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          retrieve: false
        },
        todos: [...action.payload.todos],
        error: {
          ...state.error,
          retrieve: null
        }
      }
    case RETRIEVE_TODOS_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          retrieve: false
        },
        todos: [],
        error: {
          ...state.error,
          retrieve: action.payload.error
        }
      }
    case DELETE_TODO_STARTED:
      return {
        ...state,
        loading: {
          ...state.loading,
          delete: true
        },
      }
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
        loading: {
          ...state.loading,
          delete: false
        },
        error: {
          ...state.error,
          delete: null
        }
      }
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          delete: false
        },
        error: {
          ...state.error,
          delete: action.payload.error
        }
      }
    case TOGGLE_TODO_STARTED:
      return {
        ...state,
        loading: {
          ...state.loading,
          toggle: true
        }
      }
    case TOGGLE_TODO_SUCCESS: {
      const updatedTodo = action.payload.todo
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo
          }
          return todo
        }),
        loading: {
          ...state.loading,
          toggle: false
        }
      }
    }
    case TOGGLE_TODO_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          toggle: false
        },
        error: {
          ...state.error,
          toggle: action.payload.error
        }
      }
    default:
      return state
  }
}