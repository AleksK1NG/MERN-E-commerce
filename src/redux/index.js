import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import rootReducer from './reducer'
import history from '../history'

import { persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const middlewares = [thunk, sagaMiddleware, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(saga)

// Dev only
if (process.browser && process.env.NODE_ENV === 'development') {
  window.store = store
}

export const persistor = persistStore(store)

export default { store, persistor }


