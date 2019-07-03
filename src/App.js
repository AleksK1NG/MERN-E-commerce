import React, { Suspense, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { loadUser } from './ducks/auth/authActions'
import Spinner from './components/Shared/Spinner/Spinner'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { Helmet } from 'react-helmet'

import './App.css'

const HomeView = React.lazy(() => import('./views/HomeView/HomeView'))
const Routes = React.lazy(() => import('./routes/routes'))

const App = ({ loadUser }) => {
  useEffect(() => {
    // loadUser()
    console.log('App is running =D')
  }, [loadUser])

  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <Fragment>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Alexander</title>
              <link rel="canonical" href="http://github.com/AleksK1NG" />
            </Helmet>
            {/*<Navbar />*/}
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route component={Routes} />
            </Switch>
          </Fragment>
        </ErrorBoundary>
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
      </Suspense>
    </Fragment>
  )
}

export default connect(
  null,
  { loadUser }
)(App)
