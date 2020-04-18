import { VISIBILITY_FILTERS } from '../constants'

export const getTodos = store => store && store.todos ? store.todos.todos : []

export const getAllTodosCount = store => getTodos(store).length

export const getUncheckedTodosCount = store => getTodos(store)
    .filter(todo => !todo.checked).length

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store);

    switch (visibilityFilter.filter) {
      case VISIBILITY_FILTERS.COMPLETED:
        return allTodos.filter(todo => todo.checked);
      case VISIBILITY_FILTERS.INCOMPLETE:
        return allTodos.filter(todo => !todo.checked);
      case VISIBILITY_FILTERS.ALL:
      default:
        return allTodos;
    }
  }