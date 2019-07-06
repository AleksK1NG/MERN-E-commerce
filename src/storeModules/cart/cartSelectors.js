import { createSelector } from 'reselect'
import { moduleName } from './cartConstants'

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]

export const cartItemsSelector = createSelector(
  stateSelector,
  (state) => state.get('cartItems')
)

export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((acc, item) => acc + item, 0)
)

export const cartItemsTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((acc, item) => acc + item.get('quantity') * item.get('price'), 0)
)
