import { createSelector } from 'reselect'
import { moduleName } from './authConstants'

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]

export const isAuthenticatedSelector = createSelector(
  stateSelector,
  (state) => state.get('isAuthenticated')
)

export const isLoadingSelector = createSelector(
  stateSelector,
  (state) => state.get('isLoading')
)

export const userSelector = createSelector(
  stateSelector,
  (state) => {
    const user = state.get('user')
    return user ? user.toJS() : null
  }
)

export const authUserSelector = createSelector(
  stateSelector,
  (state) => state.get('user')
)
