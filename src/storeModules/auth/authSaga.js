import { replace } from 'connected-react-router'
import { toast } from 'react-toastify'

import { takeEvery, call, put, all } from 'redux-saga/effects'
import { rejectError } from '../../utils/rejectErrorHelper'
import api from '../../services/api'
import {
  LOAD_USER_ERROR,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT_ERROR,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS
} from './authConstants'

/**
 * Sagas
 */

export function* registerSaga(action) {
  const {
    payload: { userData }
  } = action

  try {
    const { data } = yield call(api.registerUser, userData)

    yield put({
      type: SIGN_UP_SUCCESS,
      payload: { data }
    })

    localStorage.setItem('mern-dev', data.token)

    yield put(replace('/'))
    toast.success('You are registered ! =D')
  } catch (error) {
    console.log(error)
    yield put({
      type: SIGN_UP_ERROR,
      payload: { error }
    })
    toast.error(rejectError(error))
  }
}

export function* loginSaga(action) {
  const {
    payload: { userData }
  } = action

  try {
    const { data } = yield call(api.loginUser, userData)
    localStorage.setItem('mern-dev', data.token)

    yield put({
      type: SIGN_IN_SUCCESS,
      payload: { data }
    })

    yield put(replace('/'))
    toast.success('You are logged in ! =D')
  } catch (error) {
    console.error(error)

    yield put({
      type: SIGN_IN_ERROR,
      payload: { error }
    })
    toast.error(rejectError(error))
  }
}

export function* loadUserSaga() {
  try {
    const { data } = yield call(api.loadUser)

    yield put({
      type: LOAD_USER_SUCCESS,
      payload: { data }
    })
  } catch (error) {
    localStorage.removeItem('mern-dev')
    yield put({
      type: LOAD_USER_ERROR,
      payload: { error }
    })
    console.error(error)
  }
}

export function* logoutSaga() {
  try {
    // yield call(api.logoutUser);

    yield put({
      type: SIGN_OUT_SUCCESS
    })

    localStorage.removeItem('mern-dev')
    toast.warn('You are logged out')
    yield put(replace('/'))
  } catch (error) {
    localStorage.removeItem('mern-dev')
    yield put({
      type: SIGN_OUT_ERROR,
      payload: { error }
    })
    console.error(error)
  }
}

export function* updateUserSaga(action) {
  const {
    payload: { user }
  } = action

  try {
    const { data } = yield call(api.updateUser, user)
    yield put({
      type: UPDATE_USER_SUCCESS,
      payload: { data }
    })

    yield put(replace('/profile'))
    toast.success('Your profile successfully has been updated =D')
  } catch (error) {
    yield put({
      type: UPDATE_USER_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

export function* saga() {
  yield all([
    takeEvery(SIGN_UP_REQUEST, registerSaga),
    takeEvery(LOAD_USER_REQUEST, loadUserSaga),
    takeEvery(SIGN_IN_REQUEST, loginSaga),
    takeEvery(SIGN_OUT_REQUEST, logoutSaga),
    takeEvery(UPDATE_USER_REQUEST, updateUserSaga)
  ])
}
