import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './reducers/index'

const middlewares = composeWithDevTools()

export const store = createStore(rootReducers, middlewares)
