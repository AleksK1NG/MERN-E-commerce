/**
 * Action Creators
 * */
import {
  LOAD_USER_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  UPDATE_USER_REQUEST,
  SIGN_OUT_REQUEST,
  SIGN_IN_WITH_EMAIL_REQUEST,
  SIGN_UP_WITH_EMAIL_REQUEST,
  CHECK_USER_SESSION_REQUEST,
  SIGN_OUT_FB_REQUEST,
  SIGN_IN_WITH_GOOGLE_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  LOAD_USER_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_ERROR
} from './authConstants'

export const registerUserRequest = (userData) => ({
  type: SIGN_UP_REQUEST,
  payload: { userData }
})

export const registerUserSuccess = (data) => ({
  type: SIGN_UP_SUCCESS,
  payload: { data }
})

export const registerUserError = (error) => ({
  type: SIGN_UP_SUCCESS,
  payload: { error }
})

export const loginUserRequest = (userData) => ({
  type: SIGN_IN_REQUEST,
  payload: { userData }
})

export const loginUserSuccess = (data) => ({
  type: SIGN_IN_SUCCESS,
  payload: { data }
})

export const loginUserError = (error) => ({
  type: SIGN_IN_SUCCESS,
  payload: { error }
})

export const loadUserRequest = () => ({
  type: LOAD_USER_REQUEST
})

export const loadUserSuccess = (data) => ({
  type: LOAD_USER_SUCCESS,
  payload: { data }
})

export const loadUserError = (error) => ({
  type: LOAD_USER_SUCCESS,
  payload: { error }
})

export const logoutUserRequest = () => ({
  type: SIGN_OUT_REQUEST
})

export const logoutUserSuccess = () => ({
  type: SIGN_OUT_SUCCESS
})

export const logoutUserError = (error) => ({
  type: SIGN_OUT_ERROR,
  payload: { error }
})

export const updateUser = (user) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload: { user }
  }
}

// firebase
export const signInWithEmail = (userData) => ({
  type: SIGN_IN_WITH_EMAIL_REQUEST,
  payload: { userData }
})

// firebase
export const signUpWithEmail = (userData) => ({
  type: SIGN_UP_WITH_EMAIL_REQUEST,
  payload: { userData }
})

// firebase load user is exists
export const checkUserSession = () => ({
  type: CHECK_USER_SESSION_REQUEST
})

export const sighOutFbAuth = () => ({
  type: SIGN_OUT_FB_REQUEST
})

export const signInWithGoogleAction = () => ({
  type: SIGN_IN_WITH_GOOGLE_REQUEST
})
