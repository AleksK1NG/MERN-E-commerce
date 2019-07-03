import React from 'react'
import { Route, Switch } from 'react-router-dom'

// import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

const AboutView = React.lazy(() => import('../views/AboutView/AboutView'))
const NotFoundView = React.lazy(() => import('../views/NotFoundView/NotFoundView'))

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/about" component={AboutView} />
        <Route component={NotFoundView} />
      </Switch>
    </section>
  )
}

export default Routes
