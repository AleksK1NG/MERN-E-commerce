import { replace } from 'connected-react-router'
import { toast } from 'react-toastify'

import { takeEvery, call, put, all } from 'redux-saga/effects'
import { rejectError } from '../../utils/rejectErrorHelper'
import api from '../../services/api'

import {
  ADD_EDUCATION_ERROR,
  ADD_EDUCATION_REQUEST,
  ADD_EDUCATION_SUCCESS,
  ADD_EXPERIENCE_ERROR,
  ADD_EXPERIENCE_REQUEST,
  ADD_EXPERIENCE_SUCCESS,
  CREATE_PROFILE_ERROR,
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  DELETE_EDUCATION_ERROR,
  DELETE_EDUCATION_REQUEST,
  DELETE_EDUCATION_SUCCESS,
  DELETE_EXPERIENCE_ERROR,
  DELETE_EXPERIENCE_REQUEST,
  DELETE_EXPERIENCE_SUCCESS,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
  GET_CURRENT_PROFILE_ERROR,
  GET_CURRENT_PROFILE_REQUEST,
  GET_CURRENT_PROFILE_SUCCESS,
  GET_PROFILE_BY_ID_ERROR,
  GET_PROFILE_BY_ID_REQUEST,
  GET_PROFILE_BY_ID_SUCCESS,
  GET_PROFILES_ERROR,
  GET_PROFILES_REQUEST,
  GET_PROFILES_SUCCESS,
  GET_REPOS_ERROR,
  GET_REPOS_REQUEST,
  GET_REPOS_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS
} from './profileConstants'

/**
 * Sagas
 */

export function* getCurrentUserProfileSaga() {
  try {
    const { data } = yield call(api.getCurrentUserProfile)

    yield put({
      type: GET_CURRENT_PROFILE_SUCCESS,
      payload: { data }
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: GET_CURRENT_PROFILE_ERROR,
      payload: { error }
    })
  }
}

export function* createUserProfileSaga(action) {
  const {
    payload: { profileData }
  } = action

  try {
    const { data } = yield call(api.createUserProfile, profileData)

    yield put({
      type: CREATE_PROFILE_SUCCESS,
      payload: { data }
    })

    toast.success('Success ! =D')
    yield put(replace('/dashboard'))
  } catch (error) {
    console.error(error)
    yield put({
      type: CREATE_PROFILE_ERROR,
      payload: { error }
    })
    toast.error(rejectError(error))
  }
}

export function* updateUserProfileSaga(action) {
  const {
    payload: { profileData }
  } = action

  try {
    const { data } = yield call(api.updateUserProfile, profileData)

    yield put({
      type: UPDATE_PROFILE_SUCCESS,
      payload: { data }
    })

    toast.success('Success ! =D')
    yield put(replace('/dashboard'))
  } catch (error) {
    console.error(error)
    yield put({
      type: UPDATE_PROFILE_ERROR,
      payload: { error }
    })
    toast.error(rejectError(error))
  }
}

export function* addEducationSaga(action) {
  const {
    payload: { eduData }
  } = action

  try {
    const { data } = yield call(api.addEducation, eduData)

    yield put({
      type: ADD_EDUCATION_SUCCESS,
      payload: { data }
    })

    toast.success('Success ! =D')
    yield put(replace('/dashboard'))
  } catch (error) {
    yield put({
      type: ADD_EDUCATION_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

export function* addExperienceSaga(action) {
  const {
    payload: { expData }
  } = action

  try {
    const { data } = yield call(api.addExperience, expData)

    yield put({
      type: ADD_EXPERIENCE_SUCCESS,
      payload: { data }
    })

    toast.success('Success ! =D')
    yield put(replace('/dashboard'))
  } catch (error) {
    yield put({
      type: ADD_EXPERIENCE_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

export function* deleteExperienceSaga(action) {
  const {
    payload: { expId }
  } = action

  try {
    const { data } = yield call(api.deleteExperience, expId)

    yield put({
      type: DELETE_EXPERIENCE_SUCCESS,
      payload: { data, expId }
    })

    toast.success('Experience deleted !')
    yield put(replace('/dashboard'))
  } catch (error) {
    yield put({
      type: DELETE_EXPERIENCE_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

export function* deleteEducationSaga(action) {
  const {
    payload: { eduId }
  } = action

  try {
    const { data } = yield call(api.deleteEducation, eduId)

    yield put({
      type: DELETE_EDUCATION_SUCCESS,
      payload: { eduId, data }
    })

    toast.success('Education deleted !')
    yield put(replace('/dashboard'))
  } catch (error) {
    yield put({
      type: DELETE_EDUCATION_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

export function* deleteProfileSaga() {
  try {
    yield call(api.deleteProfile)

    yield put({
      type: DELETE_PROFILE_SUCCESS
    })

    toast.success('Profile was deleted !')
    yield put(replace('/'))
  } catch (error) {
    yield put({
      type: ADD_EXPERIENCE_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

export function* getAllProfilesSaga() {
  try {
    const { data } = yield call(api.getAllUsersProfiles)

    yield put({
      type: GET_PROFILES_SUCCESS,
      payload: { data }
    })
  } catch (error) {
    yield put({
      type: GET_PROFILES_ERROR,
      payload: { error }
    })
    console.error(error)
  }
}

export function* getProfileByIdSaga(action) {
  const { payload } = action

  try {
    const { data } = yield call(api.getUserProfileById, payload.profileId)

    yield put({
      type: GET_PROFILE_BY_ID_SUCCESS,
      payload: { data }
    })

    if (data.githubusername) {
      yield put({
        type: GET_REPOS_REQUEST,
        payload: { username: data.githubusername }
      })
    }
  } catch (error) {
    yield put({
      type: GET_PROFILE_BY_ID_ERROR,
      payload: { error }
    })
    console.error(error)
  }
}

export function* getGitHubReposSaga(action) {
  const { payload } = action

  try {
    const { data } = yield call(api.getGithubRepos, payload.username)

    yield put({
      type: GET_REPOS_SUCCESS,
      payload: { data }
    })
  } catch (error) {
    yield put({
      type: GET_REPOS_ERROR,
      payload: { error }
    })
    console.error(error)
  }
}

export function* saga() {
  yield all([
    takeEvery(GET_CURRENT_PROFILE_REQUEST, getCurrentUserProfileSaga),
    takeEvery(CREATE_PROFILE_REQUEST, createUserProfileSaga),
    takeEvery(UPDATE_PROFILE_REQUEST, updateUserProfileSaga),
    takeEvery(ADD_EDUCATION_REQUEST, addEducationSaga),
    takeEvery(ADD_EXPERIENCE_REQUEST, addExperienceSaga),
    takeEvery(DELETE_PROFILE_REQUEST, deleteProfileSaga),
    takeEvery(DELETE_EXPERIENCE_REQUEST, deleteExperienceSaga),
    takeEvery(DELETE_EDUCATION_REQUEST, deleteEducationSaga),
    takeEvery(GET_PROFILES_REQUEST, getAllProfilesSaga),
    takeEvery(GET_PROFILE_BY_ID_REQUEST, getProfileByIdSaga),
    takeEvery(GET_REPOS_REQUEST, getGitHubReposSaga)
  ])
}
