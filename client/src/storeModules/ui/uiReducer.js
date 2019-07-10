import { TOGGLE_CART_HIDDEN } from './uiConstants'
import { produce } from 'immer'

/**
 * Reducer
 * */
export const initialState = {
  showCartIcon: false
}

const uiReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type } = action

    switch (type) {
      case TOGGLE_CART_HIDDEN:
        draft.showCartIcon = !draft.showCartIcon
        break

      default:
        return
    }
  })

export default uiReducer
