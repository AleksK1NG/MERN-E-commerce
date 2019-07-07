import { createSelector } from 'reselect'
import { moduleName } from './authConstants'

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]

export const isAuthenticatedSelector = createSelector(
  stateSelector,
  (state) => state.isAuthenticated
)

export const isLoadingSelector = createSelector(
  stateSelector,
  (state) => state.isLoading
)

export const userSelector = createSelector(
  stateSelector,
  (state) => {
    const user = state.user
    return user
  }
)

export const authUserSelector = createSelector(
  stateSelector,
  (state) => state.user
)
