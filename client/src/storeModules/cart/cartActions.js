import { ADD_CART_ITEM, CLEAR_CART, CLEAR_ITEM_FROM_CART, DELETE_CART_ITEM } from './cartConstants'

export const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: { item }
})

export const deleteCartItem = (item) => ({
  type: DELETE_CART_ITEM,
  payload: { item }
})

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: { item }
})

export const clearCart = () => ({
  type: CLEAR_CART
})
