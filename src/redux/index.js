import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import reducer from './reducer'
import history from '../history'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history), logger))

const store = createStore(reducer, enhancer)
sagaMiddleware.run(saga)

// Dev only
if (process.browser && process.env.NODE_ENV === 'development') {
  window.store = store
}

export default store
