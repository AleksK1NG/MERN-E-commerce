import { createSelector } from 'reselect'
import { moduleName } from './uiConstants'

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]

export const showCartIconSelector = createSelector(
  stateSelector,
  (state) => state.showCartIcon
)
