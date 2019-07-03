import React from 'react'
import { Route, Switch } from 'react-router-dom'

// import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

const NotFoundView = React.lazy(() => import('../pages/NotFoundView/NotFoundView'))
const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'))
const ShopPage = React.lazy(() => import('../pages/ShopPage/ShopPage'))
const SigninAndSignupPage = React.lazy(() => import('../pages/SigninAndSignupPage/SigninAndSignupPage'))

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SigninAndSignupPage} />
        <Route component={NotFoundView} />
      </Switch>
    </section>
  )
}

export default Routes
