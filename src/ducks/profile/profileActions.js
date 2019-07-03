/**
 * Action Creators
 * */
import {
  ADD_EDUCATION_REQUEST,
  ADD_EXPERIENCE_REQUEST,
  CREATE_PROFILE_REQUEST,
  DELETE_EDUCATION_REQUEST,
  DELETE_EXPERIENCE_REQUEST,
  DELETE_PROFILE_REQUEST,
  GET_CURRENT_PROFILE_REQUEST,
  GET_PROFILE_BY_ID_REQUEST,
  GET_PROFILES_REQUEST,
  GET_REPOS_REQUEST,
  UPDATE_PROFILE_REQUEST
} from './profileConstants'

export const getAllProfiles = () => {
  return {
    type: GET_PROFILES_REQUEST
  }
}

export const getProfileById = (profileId) => {
  return {
    type: GET_PROFILE_BY_ID_REQUEST,
    payload: { profileId }
  }
}

export const getCurrentUserProfile = () => {
  return {
    type: GET_CURRENT_PROFILE_REQUEST
  }
}

export const updateUserProfile = (profileData) => {
  return {
    type: UPDATE_PROFILE_REQUEST,
    payload: { profileData }
  }
}

export const getGithubRepos = (username) => {
  debugger
  return {
    type: GET_REPOS_REQUEST,
    payload: { username }
  }
}

export const createUserProfile = (profileData) => {
  return {
    type: CREATE_PROFILE_REQUEST,
    payload: { profileData }
  }
}

export const addEducation = (eduData) => {
  return {
    type: ADD_EDUCATION_REQUEST,
    payload: { eduData }
  }
}

export const addExperience = (expData) => {
  return {
    type: ADD_EXPERIENCE_REQUEST,
    payload: { expData }
  }
}

export const deleteEducation = (eduId) => {
  return {
    type: DELETE_EDUCATION_REQUEST,
    payload: { eduId }
  }
}

export const deleteExperience = (expId) => {
  return {
    type: DELETE_EXPERIENCE_REQUEST,
    payload: { expId }
  }
}

export const deleteProfile = () => {
  return {
    type: DELETE_PROFILE_REQUEST
  }
}
