import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { userSelector } from '../storeModules/auth/authSelectors'

// import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

const NotFoundView = React.lazy(() => import('../pages/NotFoundView/NotFoundView'))
const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'))
const ShopPage = React.lazy(() => import('../pages/ShopPage/ShopPage'))
const SigninAndSignupPage = React.lazy(() => import('../pages/SignInAndSignUpPage/SignInAndSignUpPage'))

const Routes = ({ user }) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        {/*<Route exact path="/signin" component={SigninAndSignupPage} />*/}
        <Route exact path="/signin" render={() => (user ? <Redirect to="/" /> : <SigninAndSignupPage />)} />
        <Route component={NotFoundView} />
      </Switch>
    </section>
  )
}

export default connect(
  (state) => ({
    user: userSelector(state)
  }),
  null
)(Routes)
