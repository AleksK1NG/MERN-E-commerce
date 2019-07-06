import { fromJS } from 'immutable'
import { ADD_CART_ITEM, CLEAR_CART, CLEAR_ITEM_FROM_CART, DELETE_CART_ITEM } from './cartConstants'

/**
 * Reducer
 * */
export const initialState = fromJS({
  cartItems: []
})

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  // find item exists or not
  const existingCartItem = state.get('cartItems').find((cartItem) => cartItem.get('id') === payload.item.id)

  switch (type) {
    case ADD_CART_ITEM:
      // // find item exists or not
      // const existingCartItem = state.get('cartItems').find((cartItem) => cartItem.get('id') === payload.item.id)

      // if exists update quantity
      if (existingCartItem) {
        return state.update('cartItems', (cartItems) =>
          cartItems.map((cartItem) =>
            cartItem.get('id') === payload.item.id ? cartItem.set('quantity', cartItem.get('quantity') + 1) : cartItem
          )
        )
      }
      // if not exists, add item and set quantity to 1
      return state.update('cartItems', (cartItems) => cartItems.push(fromJS({ ...payload.item, quantity: 1 })))

    case DELETE_CART_ITEM:
      // if exists and quantity = 1, delete item
      if (existingCartItem.get('quantity') === 1) {
        return state.update('cartItems', (cartItems) =>
          cartItems.filter((cItem) => cItem.get('id') !== payload.item.id)
        )
      }

      // quantity > 1 decrease quantity
      return state.update('cartItems', (cartItems) =>
        cartItems.map((cItem) =>
          cItem.get('id') === payload.item.id ? cItem.set('quantity', cItem.get('quantity') + 1) : cItem
        )
      )

    case CLEAR_ITEM_FROM_CART:
      return state.update('cartItems', (cartItems) =>
        cartItems.filter((cartItem) => cartItem.get('id') !== payload.item.id)
      )

    case CLEAR_CART:
      return state.set('cartItems', fromJS([]))

    default:
      return state
  }
}
