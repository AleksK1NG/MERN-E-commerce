import {
  ADD_COMMENT_TO_POST_REQUEST,
  CREATE_POST_REQUEST,
  DELETE_COMMENT_FROM_POST_REQUEST,
  DELETE_POST_REQUEST,
  GET_POST_BY_ID_REQUEST,
  GET_POSTS_REQUEST,
  LIKE_POST_REQUEST,
  UNLIKE_POST_REQUEST
} from './postConstants'

export const getAllPosts = () => {
  return {
    type: GET_POSTS_REQUEST
  }
}

export const getPostById = (postId) => {
  return {
    type: GET_POST_BY_ID_REQUEST,
    payload: { postId }
  }
}

export const createPost = (postData) => {
  return {
    type: CREATE_POST_REQUEST,
    payload: { postData }
  }
}

export const deletePost = (postId) => {
  return {
    type: DELETE_POST_REQUEST,
    payload: { postId }
  }
}

export const likePost = (postId) => {
  return {
    type: LIKE_POST_REQUEST,
    payload: { postId }
  }
}

export const unlikePost = (postId) => {
  return {
    type: UNLIKE_POST_REQUEST,
    payload: { postId }
  }
}

export const addCommentToPost = (postId, commentData) => {
  return {
    type: ADD_COMMENT_TO_POST_REQUEST,
    payload: { postId, commentData }
  }
}

export const deleteCommentFromPost = (postId, commentId) => {
  return {
    type: DELETE_COMMENT_FROM_POST_REQUEST,
    payload: { postId, commentId }
  }
}
