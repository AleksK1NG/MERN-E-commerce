/**
 * Selectors
 * */
import { createSelector } from 'reselect'
import { moduleName } from './profileConstants'
import { userSelector } from '../auth/authSelectors'

export const stateSelector = (state) => state[moduleName]

export const isLoadingSelector = createSelector(
  stateSelector,
  (state) => state.get('isLoading')
)

export const userProfileSelector = createSelector(
  stateSelector,
  (state) => {
    const user = state.get('profile')
    return user ? user.toJS() : null
  }
)

export const userProfilesSelector = createSelector(
  stateSelector,
  (state) => {
    const user = state.get('profiles')
    return user ? user.toJS() : null
  }
)

export const reposSelector = createSelector(
  stateSelector,
  (state) => {
    const user = state.get('repos')
    return user ? user.toJS() : null
  }
)

export const isCurrentUserProfileSelector = createSelector(
  [userProfileSelector, userSelector],
  (profile, user) => {
    if (profile && user) {
      return profile.user._id === user._id
    }
  }
)
