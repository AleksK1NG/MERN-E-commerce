import React from 'react'
import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'

import { isAuthenticatedSelector } from '../../ducks/auth/authSelectors'
import { checkTokenValidity } from '../../utils/checkTokenValidity'

const ProtectedRoute = ({ isAuthorized, component: Component, ...rest }) => {
  if (localStorage.getItem('mern-dev') && checkTokenValidity(localStorage.getItem('mern-dev')))
    return <Route render={(props) => <Component {...props} />} {...rest} />

  return <Route render={(props) => (isAuthorized ? <Component {...props} /> : <Redirect to="/" />)} {...rest} />
}

export default connect(
  (state) => ({
    isAuthorized: isAuthenticatedSelector(state)
  }),
  null,
  null,
  { pure: false }
)(ProtectedRoute)
