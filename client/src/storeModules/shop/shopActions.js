import {
  FETCH_COLLECTIONS_ERROR,
  FETCH_COLLECTIONS_REQUEST,
  FETCH_COLLECTIONS_SUCCESS,
  GET_SECTIONS_ERROR,
  GET_SECTIONS_REQUEST,
  GET_SECTIONS_SUCCESS,
  STRIPE_PAYMENT_REQUEST
} from './shopConstants'

export const fetchCollections = () => ({
  type: FETCH_COLLECTIONS_REQUEST
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: { collectionsMap }
})

export const fetchCollectionsError = (error) => ({
  type: FETCH_COLLECTIONS_ERROR,
  payload: { error }
})

export const stripePayment = (paymentData) => ({
  type: STRIPE_PAYMENT_REQUEST,
  payload: { paymentData }
})

export const getSectionsRequest = () => ({
  type: GET_SECTIONS_REQUEST
})

export const getSectionsSuccess = (sections) => ({
  type: GET_SECTIONS_SUCCESS,
  payload: { sections }
})

export const getSectionsError = (error) => ({
  type: GET_SECTIONS_ERROR,
  payload: { error }
})
