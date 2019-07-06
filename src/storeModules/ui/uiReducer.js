import { fromJS } from 'immutable'
import { TOGGLE_CART_HIDDEN } from './uiConstants'

/**
 * Reducer
 * */
export const initialState = fromJS({
  showCartIcon: false
})

export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return state.set('showCartIcon', !state.get('showCartIcon'))

    default:
      return state
  }
}
