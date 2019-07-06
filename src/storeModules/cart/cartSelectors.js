import { createSelector } from 'reselect'
import { moduleName } from './cartConstants'

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]

export const cartItemsSelector = createSelector(
  stateSelector,
  (state) => {
    return state.get('cartItems').toJS()
  }
)

export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
)

export const cartItemsTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
)

// export const cartItemsTotalSelector = createSelector(
//   cartItemsSelector,
//   (cartItems) => cartItems.reduce((acc, item) => acc + item.get('quantity') * item.get('price'), 0)
// )
