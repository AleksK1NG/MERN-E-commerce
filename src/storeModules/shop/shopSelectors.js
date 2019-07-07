import { createSelector } from 'reselect'
import { moduleName } from './shopConstants'

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]

export const shopCollectionsSelector = createSelector(
  stateSelector,
  (state) => state.collections
)

export const shopLoadingSelector = createSelector(
  stateSelector,
  (state) => state.isLoading
)
