import { produce } from 'immer'
import { FETCH_COLLECTIONS_ERROR, FETCH_COLLECTIONS_REQUEST, FETCH_COLLECTIONS_SUCCESS } from './shopConstants'

/**
 * Reducer
 * */
export const initialState = {
  collections: [],
  isLoading: false,
  error: null
}

const shopReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action

    switch (type) {
      case FETCH_COLLECTIONS_REQUEST:
        draft.isLoading = true
        return

      case FETCH_COLLECTIONS_SUCCESS:
        draft.collections = payload.collectionsMap
        draft.error = null
        draft.isLoading = false
        return

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
