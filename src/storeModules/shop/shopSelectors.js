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

export const collectionsForPreviewSelector = createSelector(
  [shopCollectionsSelector],
  (collections) => Object.keys(collections).map((key) => collections[key])
)

export const shopLoadingSelector = createSelector(
  stateSelector,
  (state) => state.isLoading
)
