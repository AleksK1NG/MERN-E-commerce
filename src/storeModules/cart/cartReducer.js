import { ADD_CART_ITEM, CLEAR_CART, CLEAR_ITEM_FROM_CART, DELETE_CART_ITEM } from './cartConstants'
import { produce } from 'immer'

/**
 * Reducer
 * */
export const initialState = {
  cartItems: []
}

const cartReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action
    let index

    switch (type) {
      case ADD_CART_ITEM:
        // find index of item in array
        index = draft.cartItems.findIndex((cartItem) => cartItem.id === payload.item.id)

        // if item exists in array, quantity++
        if (index >= 0) {
          draft.cartItems[index].quantity++
          return
        }
        // is not exists, push item to array
        draft.cartItems.push({ ...payload.item, quantity: 1 })
        return

      case DELETE_CART_ITEM:
        index = draft.cartItems.findIndex((cartItem) => cartItem.id === payload.item.id)

        if (index >= 0 && draft.cartItems[index].quantity > 1) {
          draft.cartItems[index].quantity--
          return
        }
        draft.cartItems.splice(index, 1)
        return

      case CLEAR_ITEM_FROM_CART:
        index = draft.cartItems.findIndex((cartItem) => cartItem.id === payload.item.id)

        draft.cartItems.splice(index, 1)
        return

      case CLEAR_CART:
        draft.cartItems = []
        return

      default:
        return
    }
  })

export default cartReducer
