import { createStore, compose } from 'redux'
import rootReducer from './reducers'

const initialState = {}

export default createStore(
    rootReducer,
    initialState,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)