import { fromJS } from 'immutable'
import {
  LOAD_USER_ERROR,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_WITH_EMAIL_ERROR,
  SIGN_IN_WITH_EMAIL_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS
} from './authConstants'

/**
 * Reducer
 * */
export const ReducerRecord = fromJS({
  user: null,
  error: null,
  isAuthenticated: false,
  isLoading: true
})

export default function reducer(state = ReducerRecord, action) {
  const { type, payload } = action

  switch (type) {
    case UPDATE_USER_REQUEST:
    case SIGN_IN_REQUEST:
    case SIGN_UP_REQUEST:
    case LOAD_USER_REQUEST:
      return state.set('isLoading', true)

    case SIGN_UP_SUCCESS:
      return state
        .set('user', fromJS(payload.data))
        .set('isLoading', false)
        .set('isAuthenticated', true)
        .set('error', null)

    case SIGN_IN_SUCCESS:
      return state
        .set('user', fromJS(payload.data))
        .set('error', null)
        .set('isLoading', false)
        .set('isAuthenticated', true)

    case LOAD_USER_SUCCESS:
      return state
        .set('user', fromJS(payload.data))
        .set('isLoading', false)
        .set('isAuthenticated', true)
        .set('error', null)

    case SIGN_OUT_SUCCESS:
      return state
        .set('isLoading', false)
        .set('isAuthenticated', false)
        .set('user', null)

    case SIGN_IN_WITH_EMAIL_ERROR:
    case UPDATE_USER_ERROR:
    case SIGN_IN_ERROR:
    case SIGN_UP_ERROR:
    case LOAD_USER_ERROR:
      return state.set('error', payload.error).set('isLoading', false)

    case UPDATE_USER_SUCCESS:
      return state
        .merge({ user: fromJS(payload.data) })
        .set('error', null)
        .set('isLoading', false)

    case SIGN_IN_WITH_EMAIL_SUCCESS:
      return state
        .set('user', fromJS(payload.data))
        .set('error', null)
        .set('isLoading', false)
        .set('isAuthenticated', true)

    default:
      return state
  }
}
