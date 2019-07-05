/**
 * Action Creators
 * */
import {
  LOAD_USER_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  UPDATE_USER_REQUEST,
  SIGN_OUT_REQUEST,
  SIGN_IN_WITH_EMAIL_REQUEST, SIGN_UP_WITH_EMAIL_REQUEST
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
export const signInWithEmail = ({ email, password }) => {
  return {
    type: SIGN_IN_WITH_EMAIL_REQUEST,
    payload: { email, password }
  }
}

export const signUpWithEmail = (userData) => {
  return {
    type: SIGN_UP_WITH_EMAIL_REQUEST,
    payload: { userData }
  }
}