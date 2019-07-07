import {
  LOAD_USER_ERROR,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_WITH_EMAIL_ERROR,
  SIGN_IN_WITH_EMAIL_SUCCESS,
  SIGN_OUT_FB_ERROR,
  SIGN_OUT_FB_REQUEST,
  SIGN_OUT_FB_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_WITH_EMAIL_ERROR,
  SIGN_UP_WITH_EMAIL_REQUEST,
  SIGN_UP_WITH_EMAIL_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS
} from './authConstants'
import { produce } from 'immer'

/**
 * Reducer
 * */
export const initialState = {
  user: null,
  error: null,
  isAuthenticated: false,
  isLoading: true
}

const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action
    switch (type) {
      case SIGN_OUT_FB_REQUEST:
      case SIGN_UP_WITH_EMAIL_REQUEST:
      case UPDATE_USER_REQUEST:
      case SIGN_IN_REQUEST:
      case SIGN_UP_REQUEST:
      case LOAD_USER_REQUEST:
        draft.isLoading = true
        break

      case LOAD_USER_SUCCESS:
      case SIGN_IN_SUCCESS:
      case SIGN_UP_SUCCESS:
        draft.user = payload.data
        draft.isLoading = false
        draft.isAuthenticated = true
        draft.error = null
        break

      case SIGN_OUT_FB_SUCCESS:
      case SIGN_OUT_SUCCESS:
        draft.isLoading = false
        draft.isAuthenticated = false
        draft.user = null
        break

      case SIGN_OUT_FB_ERROR:
      case SIGN_UP_WITH_EMAIL_ERROR:
      case SIGN_IN_WITH_EMAIL_ERROR:
      case UPDATE_USER_ERROR:
      case SIGN_IN_ERROR:
      case SIGN_UP_ERROR:
      case LOAD_USER_ERROR:
        draft.error = payload.error
        draft.isLoading = false
        break

      case UPDATE_USER_SUCCESS:
        draft.user = { ...draft.user, ...payload.data }
        draft.error = null
        draft.isLoading = false
        break

      case SIGN_IN_WITH_EMAIL_SUCCESS:
        draft.user = payload.user
        draft.error = null
        draft.isLoading = false
        draft.isAuthenticated = true
        break

      case SIGN_UP_WITH_EMAIL_SUCCESS:
        draft.user = payload.newUser
        draft.error = null
        draft.isLoading = false
        draft.isAuthenticated = true
        break
    }
  })

export default authReducer
