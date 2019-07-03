import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from '../ducks/auth/authReducer'
import profileReducer from '../ducks/profile/profileReducer'
import postReducer from '../ducks/post/postReducer'
import history from '../history'

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  post: postReducer,
  router: connectRouter(history)
})
