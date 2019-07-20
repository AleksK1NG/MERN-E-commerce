import { produce } from 'immer'
import {
  FETCH_COLLECTIONS_ERROR,
  FETCH_COLLECTIONS_REQUEST,
  FETCH_COLLECTIONS_SUCCESS,
  GET_SECTIONS_ERROR,
  GET_SECTIONS_REQUEST,
  GET_SECTIONS_SUCCESS,
  STRIPE_PAYMENT_ERROR
} from './shopConstants'
// import SHOP_DATA from './shop.data'

/**
 * Reducer
 * */
export const initialState = {
  collections: null,
  isLoading: false,
  error: null,
  sections: null
}

const shopReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action

    switch (type) {
      case GET_SECTIONS_REQUEST:
      case FETCH_COLLECTIONS_REQUEST:
        draft.isLoading = true
        return

      case FETCH_COLLECTIONS_SUCCESS:
        draft.collections = payload.collectionsMap
        draft.error = null
        draft.isLoading = false
        return

      case GET_SECTIONS_SUCCESS:
        draft.sections = payload.sections
        draft.error = null
        draft.isLoading = false
        return

      case GET_SECTIONS_ERROR:
      case STRIPE_PAYMENT_ERROR:
      case FETCH_COLLECTIONS_ERROR:
        draft.error = payload.error
        // draft.collections = []
        draft.isLoading = false
        return

      default:
        return state
    }
  })

export default shopReducer
