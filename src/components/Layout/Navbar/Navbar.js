import React, { Fragment } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuthenticatedSelector, isLoadingSelector } from '../../../ducks/auth/authSelectors'
import { logoutUser } from '../../../ducks/auth/authActions'

const Navbar = ({ isAuthenticated, isLoading, logoutUser }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Users</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" /> <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logoutUser} href="#!">
          <i className="fas fa-sign-out-alt" /> <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Users</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  )

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> Alexander Bryksin
        </Link>
      </h1>
      {!isLoading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
    </nav>
  )
}

export default connect(
  (state) => ({
    isAuthenticated: isAuthenticatedSelector(state),
    isLoading: isLoadingSelector(state)
  }),
  { logoutUser }
)(Navbar)
