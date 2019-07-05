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
  SIGN_OUT_FB_REQUEST
} from './authConstants'

export const registerUser = (userData) => {
  return {
    type: SIGN_UP_REQUEST,
    payload: { userData }
  }
}

export const loginUser = (userData) => {
  return {
    type: SIGN_IN_REQUEST,
    payload: { userData }
  }
}

export const loadUser = () => {
  return {
    type: LOAD_USER_REQUEST
  }
}

export const logoutUser = () => {
  return {
    type: SIGN_OUT_REQUEST
  }
}

export const updateUser = (user) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload: { user }
  }
}

// firebase
export const signInWithEmail = (userData) => {
  return {
    type: SIGN_IN_WITH_EMAIL_REQUEST,
    payload: { userData }
  }
}

// firebase
export const signUpWithEmail = (userData) => {
  return {
    type: SIGN_UP_WITH_EMAIL_REQUEST,
    payload: { userData }
  }
}

// firebase load user is exists
export const checkUserSession = () => ({
  type: CHECK_USER_SESSION_REQUEST
})

export const sighOutFbAuth = () => ({
  type: SIGN_OUT_FB_REQUEST
})
