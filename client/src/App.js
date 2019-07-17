import React, { Suspense, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import { checkUserSession, loadUserRequest } from './storeModules/auth/authActions'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { Helmet } from 'react-helmet'
import Header from './components/Layout/Header/Header'

import Spinner from './components/Shared/Spinner/Spinner'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyle } from './global.styles'

const Routes = React.lazy(() => import('./routes/routes'))

const App = ({ checkUserSession, loadUserRequest }) => {
  useEffect(() => {
    loadUserRequest()
  }, [loadUserRequest])

  return (
    <Fragment>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Fragment>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Alex Bryksin E-commerce shop</title>
              <link rel="canonical" href="http://github.com/AleksK1NG" />
            </Helmet>
            <GlobalStyle />
            <Header />
            <Switch>
              <Route component={Routes} />
            </Switch>
          </Fragment>

          <ToastContainer position={toast.POSITION.TOP_CENTER} />
        </Suspense>
      </ErrorBoundary>
    </Fragment>
  )
}

export default connect(
  null,
  { checkUserSession, loadUserRequest }
)(App)
