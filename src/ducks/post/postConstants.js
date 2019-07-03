/**
 * Constants
 * */
import { appName } from '../../config'

export const moduleName = 'post'
const prefix = `${appName}/${moduleName}`

export const GET_POSTS_REQUEST = `${prefix}/GET_POSTS_REQUEST`
export const GET_POSTS_SUCCESS = `${prefix}/GET_POSTS_SUCCESS`
export const GET_POSTS_ERROR = `${prefix}/GET_POSTS_ERROR`

export const CREATE_POST_REQUEST = `${prefix}/CREATE_POST_REQUEST`
export const CREATE_POST_SUCCESS = `${prefix}/CREATE_POST_SUCCESS`
export const CREATE_POST_ERROR = `${prefix}/CREATE_POST_ERROR`

export const GET_POST_BY_ID_REQUEST = `${prefix}/GET_POST_BY_ID_REQUEST`
export const GET_POST_BY_ID_SUCCESS = `${prefix}/GET_POST_BY_ID_SUCCESS`
export const GET_POST_BY_ID_ERROR = `${prefix}/GET_POST_BY_ID_ERROR`

export const DELETE_POST_REQUEST = `${prefix}/DELETE_POST_REQUEST`
export const DELETE_POST_SUCCESS = `${prefix}/DELETE_POST_SUCCESS`
export const DELETE_POST_ERROR = `${prefix}/DELETE_POST_ERROR`

export const LIKE_POST_REQUEST = `${prefix}/LIKE_POST_REQUEST`
export const LIKE_POST_SUCCESS = `${prefix}/LIKE_POST_SUCCESS`
export const LIKE_POST_ERROR = `${prefix}/LIKE_POST_ERROR`

export const UNLIKE_POST_REQUEST = `${prefix}/UNLIKE_POST_REQUEST`
export const UNLIKE_POST_SUCCESS = `${prefix}/UNLIKE_POST_SUCCESS`
export const UNLIKE_POST_ERROR = `${prefix}/UNLIKE_POST_ERROR`

export const ADD_COMMENT_TO_POST_REQUEST = `${prefix}/ADD_COMMENT_TO_POST_REQUEST`
export const ADD_COMMENT_TO_POST_SUCCESS = `${prefix}/ADD_COMMENT_TO_POST_SUCCESS`
export const ADD_COMMENT_TO_POST_ERROR = `${prefix}/ADD_COMMENT_TO_POST_ERROR`

export const DELETE_COMMENT_FROM_POST_REQUEST = `${prefix}/DELETE_COMMENT_FROM_POST_REQUEST`
export const DELETE_COMMENT_FROM_POST_SUCCESS = `${prefix}/DELETE_COMMENT_FROM_POST_SUCCESS`
export const DELETE_COMMENT_FROM_POST_ERROR = `${prefix}/DELETE_COMMENT_FROM_POST_ERROR`
