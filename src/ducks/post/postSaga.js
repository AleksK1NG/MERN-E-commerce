// import { replace } from 'connected-react-router'
import { toast } from 'react-toastify'

import { takeEvery, call, put, all } from 'redux-saga/effects'
import { rejectError } from '../../utils/rejectErrorHelper'
import api from '../../services/api'

import {
  ADD_COMMENT_TO_POST_ERROR,
  ADD_COMMENT_TO_POST_REQUEST,
  ADD_COMMENT_TO_POST_SUCCESS,
  CREATE_POST_ERROR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_COMMENT_FROM_POST_ERROR,
  DELETE_COMMENT_FROM_POST_REQUEST,
  DELETE_COMMENT_FROM_POST_SUCCESS,
  DELETE_POST_ERROR,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_POST_BY_ID_ERROR,
  GET_POST_BY_ID_REQUEST,
  GET_POST_BY_ID_SUCCESS,
  GET_POSTS_ERROR,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  LIKE_POST_ERROR,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  UNLIKE_POST_ERROR,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS
} from './postConstants'

/**
 * Sagas
 */

export function* getPostsSaga() {
  try {
    const { data } = yield call(api.getAllPosts)

    yield put({
      type: GET_POSTS_SUCCESS,
      payload: { data }
    })
  } catch (error) {
    yield put({
      type: GET_POSTS_ERROR,
      payload: { error }
    })
    console.error(error)

    toast.error(rejectError(error))
  }
}

export function* getPostByIdSaga({ payload }) {
  try {
    const { data } = yield call(api.getPostById, payload.postId)

    yield put({
      type: GET_POST_BY_ID_SUCCESS,
      payload: { data }
    })
  } catch (error) {
    yield put({
      type: GET_POST_BY_ID_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

export function* createPostSaga({ payload }) {
  try {
    const { data } = yield call(api.createPost, payload.postData)

    yield put({
      type: CREATE_POST_SUCCESS,
      payload: { data }
    })

    toast.success('Post created ! =D')
  } catch (error) {
    yield put({
      type: CREATE_POST_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

export function* deletePostSaga({ payload }) {
  try {
    const { data } = yield call(api.deletePost, payload.postId)

    yield put({
      type: DELETE_POST_SUCCESS,
      payload: { data, postId: payload.postId }
    })

    toast.success('Post Deleted ! =D')
  } catch (error) {
    console.log(error)
    yield put({
      type: DELETE_POST_ERROR,
      payload: { error }
    })
    toast.error(rejectError(error))
  }
}

export function* likePostSaga({ payload }) {
  try {
    const { data } = yield call(api.likePost, payload.postId)

    yield put({
      type: LIKE_POST_SUCCESS,
      payload: { data, postId: payload.postId }
    })

    toast.success('You have liked this post ! =D')
  } catch (error) {
    yield put({
      type: LIKE_POST_ERROR,
      payload: { error }
    })

    toast.error(rejectError(error))
  }
}

export function* unlikePostSaga({ payload }) {
  try {
    const { data } = yield call(api.unlikePost, payload.postId)

    yield put({
      type: UNLIKE_POST_SUCCESS,
      payload: { data, postId: payload.postId }
    })

    toast.success('You have unliked this post ! =D')
  } catch (error) {
    yield put({
      type: UNLIKE_POST_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

export function* addCommentSaga({ payload }) {
  const { postId, commentData } = payload

  try {
    const { data } = yield call(api.addCommentToPost, postId, commentData)

    yield put({
      type: ADD_COMMENT_TO_POST_SUCCESS,
      payload: { data, postId: payload.postId }
    })

    toast.success('Comments created ! =D')
  } catch (error) {
    yield put({
      type: ADD_COMMENT_TO_POST_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

export function* deleteCommentSaga({ payload }) {
  const { postId, commentId } = payload
  try {
    const { data } = yield call(api.deleteCommentFromPost, postId, commentId)

    yield put({
      type: DELETE_COMMENT_FROM_POST_SUCCESS,
      payload: { data, postId: payload.postId }
    })

    toast.success('Comment deleted ! =D')
  } catch (error) {
    yield put({
      type: DELETE_COMMENT_FROM_POST_ERROR,
      payload: { error }
    })
    console.error(error)
    toast.error(rejectError(error))
  }
}

export function* saga() {
  yield all([
    takeEvery(GET_POSTS_REQUEST, getPostsSaga),
    takeEvery(GET_POST_BY_ID_REQUEST, getPostByIdSaga),
    takeEvery(CREATE_POST_REQUEST, createPostSaga),
    takeEvery(DELETE_POST_REQUEST, deletePostSaga),
    takeEvery(LIKE_POST_REQUEST, likePostSaga),
    takeEvery(UNLIKE_POST_REQUEST, unlikePostSaga),
    takeEvery(ADD_COMMENT_TO_POST_REQUEST, addCommentSaga),
    takeEvery(DELETE_COMMENT_FROM_POST_REQUEST, deleteCommentSaga)
  ])
}
