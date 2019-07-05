import React from 'react'
import {connect} from 'react-redux'
import './Header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../assets/crown.svg'
import { auth } from '../../../firebase/firebase.utils'
import { userSelector } from '../../../storeModules/auth/authSelectors'

const Header = ({ user }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {user && user.email}
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contacts" className="option">
          CONTACTS
        </Link>
        {user ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

export default connect(state => ({
  user: userSelector(state)
}), null)(Header)

//https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
