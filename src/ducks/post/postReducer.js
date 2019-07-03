import { fromJS } from 'immutable'
import {
  ADD_COMMENT_TO_POST_ERROR,
  ADD_COMMENT_TO_POST_SUCCESS,
  CREATE_POST_ERROR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_COMMENT_FROM_POST_ERROR,
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
  LIKE_POST_SUCCESS,
  UNLIKE_POST_ERROR,
  UNLIKE_POST_SUCCESS
} from './postConstants'

/**
 * Reducer
 * */
export const ReducerRecord = fromJS({
  posts: null,
  post: null,
  error: null,
  isLoading: true
})

export default function reducer(state = ReducerRecord, action) {
  const { type, payload } = action

  switch (type) {
    case GET_POSTS_REQUEST:
    case GET_POST_BY_ID_REQUEST:
    case CREATE_POST_REQUEST:
    case DELETE_POST_REQUEST:
      // case LIKE_POST_REQUEST:
      // case UNLIKE_POST_REQUEST:
      return state.set('isLoading', true)

    case GET_POSTS_SUCCESS:
      return state
        .set('posts', fromJS(payload.data))
        .set('isLoading', false)
        .set('error', null)

    case GET_POST_BY_ID_SUCCESS:
      return state
        .set('post', fromJS(payload.data))
        .set('isLoading', false)
        .set('error', null)

    case CREATE_POST_SUCCESS:
      return state
        .update('posts', (posts) => posts.unshift(fromJS(payload.data)))
        .set('isLoading', false)
        .set('error', null)

    case DELETE_POST_SUCCESS:
      return state
        .update('posts', (posts) => posts.filter((p) => p.get('_id') !== payload.postId))
        .set('isLoading', false)
        .set('error', null)

    case LIKE_POST_SUCCESS:
    case UNLIKE_POST_SUCCESS:
      return state.update('posts', (posts) =>
        posts
          .map((p) => (p.get('_id') === payload.postId ? p.set('likes', fromJS(payload.data)) : p))
          .set('isLoading', false)
          .set('error', null)
      )

    case ADD_COMMENT_TO_POST_SUCCESS:
      return state
        .setIn(['post', 'comments'], fromJS(payload.data))
        .set('isLoading', false)
        .set('error', null)

    case DELETE_COMMENT_FROM_POST_SUCCESS:
      return state
        .setIn(['post', 'comments'], fromJS(payload.data))
        .set('isLoading', false)
        .set('error', null)

    case GET_POST_BY_ID_ERROR:
    case GET_POSTS_ERROR:
    case CREATE_POST_ERROR:
    case DELETE_POST_ERROR:
    case LIKE_POST_ERROR:
    case UNLIKE_POST_ERROR:
    case ADD_COMMENT_TO_POST_ERROR:
    case DELETE_COMMENT_FROM_POST_ERROR:
      return state.set('error', payload.error).set('isLoading', false)

    default:
      return state
  }
}
