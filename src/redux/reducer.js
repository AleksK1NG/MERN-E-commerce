import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from '../storeModules/auth/authReducer'
import history from '../history'

export default combineReducers({
  auth: authReducer,
  router: connectRouter(history)
})
