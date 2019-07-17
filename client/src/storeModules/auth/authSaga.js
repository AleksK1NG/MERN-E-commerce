import { replace } from 'connected-react-router'
import { toast } from 'react-toastify'

import { call, put, all, takeLatest } from 'redux-saga/effects'
import { rejectError } from '../../utils/rejectErrorHelper'
import api from '../../services/apiService'
import {
  CHECK_USER_SESSION_REQUEST,
  LOAD_USER_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_IN_WITH_EMAIL_ERROR,
  SIGN_IN_WITH_EMAIL_REQUEST,
  SIGN_IN_WITH_EMAIL_SUCCESS,
  SIGN_IN_WITH_GOOGLE_ERROR,
  SIGN_IN_WITH_GOOGLE_REQUEST,
  SIGN_OUT_FB_ERROR,
  SIGN_OUT_FB_REQUEST,
  SIGN_OUT_FB_SUCCESS,
  SIGN_OUT_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_UP_WITH_EMAIL_ERROR,
  SIGN_UP_WITH_EMAIL_REQUEST,
  SIGN_UP_WITH_EMAIL_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS
} from './authConstants'
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from '../../firebase/firebase.utils'
import { CLEAR_CART } from '../cart/cartConstants'
import {
  loadUserError,
  loadUserSuccess,
  loginUserError,
  loginUserSuccess,
  logoutUserError,
  logoutUserSuccess,
  registerUserError,
  registerUserSuccess
} from './authActions'

/**
 * Sagas
 */

export function* registerSaga({ payload }) {
  const { userData } = payload

  try {
    const { data } = yield call(api.registerUser, userData)
    yield put(registerUserSuccess(data))
    localStorage.setItem('mern-dev', data.token)

    yield put(replace('/'))
    toast.success('You are successfully registered ! =D')
  } catch (error) {
    console.error(error)
    yield put(registerUserError(error))
    toast.error(rejectError(error))
  }
}

export function* loginSaga({ payload }) {
  const { userData } = payload

  try {
    const { data } = yield call(api.loginUser, userData)
    yield put(loginUserSuccess(data))
    localStorage.setItem('mern-dev', data.token)

    yield put(replace('/'))
    toast.success('You are successfully logged in ! =D')
  } catch (error) {
    console.error(error)

    yield put(loginUserError(error))
    toast.error(rejectError(error))
  }
}

export function* loadUserSaga() {
  try {
    const { data } = yield call(api.loadUser)

    yield put(loadUserSuccess(data))
  } catch (error) {
    localStorage.removeItem('mern-dev')
    yield put(loadUserError(error))
    console.error(error)
  }
}

export function* logoutSaga() {
  try {
    // yield call(api.logoutUser);
    yield put(logoutUserSuccess())

    localStorage.removeItem('mern-dev')
    toast.warn('You are logged out')
    yield put(replace('/'))
  } catch (error) {
    localStorage.removeItem('mern-dev')
    yield put(logoutUserError(error))
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

// firebase
export function* getSnapshotFromUserAuthSaga(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
    const userSnapshot = yield userRef.get()
    const user = { id: userSnapshot.id, ...userSnapshot.data() }
    yield put({
      type: SIGN_IN_WITH_EMAIL_SUCCESS,
      payload: { user }
    })
  } catch (error) {
    yield put({
      type: SIGN_UP_WITH_EMAIL_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error('Error')
  }
}

// firebase
export function* signInWithEmailSaga({ payload }) {
  const {
    userData: { email, password }
  } = payload

  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuthSaga(user)

    // yield put({
    //   type: SIGN_IN_WITH_EMAIL_SUCCESS,
    //   payload: { user }
    // })

    yield put(replace('/shop'))
    toast.success('You are logged in, success')
  } catch (error) {
    yield put({
      type: SIGN_IN_WITH_EMAIL_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

// firebase
export function* signUpWithEmailSaga({ payload }) {
  const {
    userData: { email, password, displayName }
  } = payload

  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    const newUser = { ...user, additionalData: { displayName } }

    yield put({
      type: SIGN_UP_WITH_EMAIL_SUCCESS,
      payload: { newUser }
    })
    debugger
    // yield put(replace('/profile'))
    toast.success('You are registered, success ')
  } catch (error) {
    yield put({
      type: SIGN_UP_WITH_EMAIL_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

// firebase load user is exists
export function* isUserAuthenticatedSaga() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getSnapshotFromUserAuthSaga(userAuth)
  } catch (error) {
    yield put({
      type: SIGN_UP_WITH_EMAIL_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

export function* signOutFbSaga() {
  try {
    yield auth.signOut()
    yield put({
      type: SIGN_OUT_FB_SUCCESS
    })
    yield put({
      type: CLEAR_CART
    })

    yield put(replace('/'))
    toast.warn('You are logged out')
  } catch (error) {
    yield put({
      type: SIGN_OUT_FB_ERROR
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

export function* signInWithGoogleSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)

    yield getSnapshotFromUserAuthSaga(user)

    toast.success('You are logged in, success')
  } catch (error) {
    yield put({
      type: SIGN_IN_WITH_GOOGLE_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

// export function* signInAfterSignUpSaga({ payload: { user, additionalData } }) {
//   yield getSnapshotFromUserAuthSaga(user, additionalData)
// }

export function* saga() {
  yield all([
    takeLatest(SIGN_UP_REQUEST, registerSaga),
    takeLatest(LOAD_USER_REQUEST, loadUserSaga),
    takeLatest(SIGN_IN_REQUEST, loginSaga),
    takeLatest(SIGN_OUT_REQUEST, logoutSaga),
    takeLatest(UPDATE_USER_REQUEST, updateUserSaga),
    takeLatest(SIGN_IN_WITH_EMAIL_REQUEST, signInWithEmailSaga),
    takeLatest(SIGN_UP_WITH_EMAIL_REQUEST, signUpWithEmailSaga),
    takeLatest(CHECK_USER_SESSION_REQUEST, isUserAuthenticatedSaga),
    takeLatest(SIGN_OUT_FB_REQUEST, signOutFbSaga),
    takeLatest(SIGN_IN_WITH_GOOGLE_REQUEST, signInWithGoogleSaga)
  ])
}
