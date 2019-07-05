import React, { Suspense, useEffect, Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { loadUser } from './storeModules/auth/authActions'
import Spinner from './components/Shared/Spinner/Spinner'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { Helmet } from 'react-helmet'

import './App.css'
import Header from './components/Layout/Header/Header'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

const Routes = React.lazy(() => import('./routes/routes'))

const App = ({ loadUser }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    // loadUser()
    const unSubscribe = auth.onAuthStateChanged(async (userAuth) => {
      try {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)

          userRef.onSnapshot((snapshot) => {
            const userObj = { id: snapshot.id, ...snapshot.data() }
            // return  setCurrentUser((currentUser) => userObj)
          }, () => {
            console.log(currentUser)
          })
        }
        setCurrentUser(currentUser => userAuth)

      } catch (error) {
        console.error(error)
      }
    })
    return () => {
      unSubscribe()
    }
  }, [setCurrentUser, currentUser])

  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <Fragment>
            <Helmet>
              <meta charSet="utf-8" />
              <title>E-commerce</title>
              <link rel="canonical" href="http://github.com/AleksK1NG" />
            </Helmet>
            <Header currentUser={currentUser} />
            <Switch>
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
