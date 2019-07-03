import { fromJS } from 'immutable'

import {
  ADD_EDUCATION_ERROR,
  ADD_EDUCATION_REQUEST,
  ADD_EDUCATION_SUCCESS,
  ADD_EXPERIENCE_ERROR,
  ADD_EXPERIENCE_REQUEST,
  ADD_EXPERIENCE_SUCCESS,
  CLEAR_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR,
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  DELETE_EDUCATION_ERROR,
  DELETE_EDUCATION_REQUEST,
  DELETE_EDUCATION_SUCCESS,
  DELETE_EXPERIENCE_ERROR,
  DELETE_EXPERIENCE_REQUEST,
  DELETE_EXPERIENCE_SUCCESS,
  DELETE_PROFILE_ERROR,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
  GET_CURRENT_PROFILE_ERROR,
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
 * Reducer
 * */
export const ReducerRecord = fromJS({
  profile: null,
  profiles: null,
  repos: null,
  error: null,
  isLoading: true
})

export default function reducer(state = ReducerRecord, action) {
  const { type, payload } = action

  switch (type) {
    case DELETE_EXPERIENCE_REQUEST:
    case DELETE_PROFILE_REQUEST:
    case DELETE_EDUCATION_REQUEST:
    case GET_REPOS_REQUEST:
    case GET_PROFILE_BY_ID_REQUEST:
    case GET_PROFILES_REQUEST:
    case CREATE_PROFILE_REQUEST:
    case UPDATE_PROFILE_REQUEST:
    case ADD_EXPERIENCE_REQUEST:
    case ADD_EDUCATION_REQUEST:
      return state.set('isLoading', true)

    case CLEAR_PROFILE_SUCCESS:
      return state
        .set('profile', null)
        .set('repos', null)
        .set('isLoading', false)
        .set('error', null)

    // case GET_PROFILE_BY_ID_SUCCESS:
    // case GET_CURRENT_PROFILE_SUCCESS:
    //   return state
    //     .set('profile', fromJS(payload.data))
    //     .set('isLoading', false)
    //     .set('error', null);

    case GET_PROFILE_BY_ID_SUCCESS:
    case GET_CURRENT_PROFILE_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
    case ADD_EDUCATION_SUCCESS:
    case ADD_EXPERIENCE_SUCCESS:
      return state
        .set('profile', fromJS(payload.data))
        .set('error', null)
        .set('isLoading', false)

    case GET_REPOS_SUCCESS:
      return state
        .set('repos', fromJS(payload.data))
        .set('isLoading', false)
        .set('error', null)

    case GET_PROFILES_SUCCESS:
      return state
        .set('profiles', fromJS(payload.data))
        .set('isLoading', false)
        .set('user', null)

    case DELETE_EDUCATION_ERROR:
    case DELETE_EXPERIENCE_ERROR:
    case DELETE_PROFILE_ERROR:
    case GET_PROFILE_BY_ID_ERROR:
    case GET_PROFILES_ERROR:
    case GET_REPOS_ERROR:
    case UPDATE_PROFILE_ERROR:
    case GET_CURRENT_PROFILE_ERROR:
    case CREATE_PROFILE_ERROR:
    case ADD_EXPERIENCE_ERROR:
    case ADD_EDUCATION_ERROR:
      return state.set('error', payload.error).set('isLoading', false)

    case CREATE_PROFILE_SUCCESS:
      return state
        .set('profile', fromJS(payload.data))
        .set('error', null)
        .set('isLoading', false)

    case DELETE_PROFILE_SUCCESS:
      return state
        .set('profile', null)
        .set('error', null)
        .set('isLoading', false)

    case DELETE_EDUCATION_SUCCESS:
      return state
        .updateIn(['profile', 'education'], (education) => education.filter((edu) => edu.get('_id') !== payload.eduId))
        .set('error', null)
        .set('isLoading', false)

    case DELETE_EXPERIENCE_SUCCESS:
      return state
        .updateIn(['profile', 'experience'], (experience) =>
          experience.filter((exp) => exp.get('_id') !== payload.expId)
        )
        .set('error', null)
        .set('isLoading', false)

    default:
      return state
  }
}
