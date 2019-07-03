import React from 'react'
import { Route, Switch } from 'react-router-dom'

// import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

const NotFoundView = React.lazy(() => import('../pages/NotFoundView/NotFoundView'))
const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'))

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundView} />
      </Switch>
    </section>
  )
}

export default Routes
