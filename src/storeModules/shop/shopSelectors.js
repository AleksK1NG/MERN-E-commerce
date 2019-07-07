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

// for routing by /:collectionId
export const collectionUrlParamSelector = (urlParam) =>
  createSelector(
    shopCollectionsSelector,
    (collections) => collections[urlParam]
  )

export const shopLoadingSelector = createSelector(
  stateSelector,
  (state) => state.isLoading
)
