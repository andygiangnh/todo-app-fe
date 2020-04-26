import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import rootSagas from './sagas'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

const initialState = {}
const saga = createSagaMiddleware()
const middleware = [saga, thunk]

export default createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

saga.run(rootSagas)