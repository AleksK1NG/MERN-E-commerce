import React from 'react'
import { connect } from 'react-redux'
import './Header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../assets/crown.svg'
import { userSelector } from '../../../storeModules/auth/authSelectors'
import { sighOutFbAuth } from '../../../storeModules/auth/authActions'
import CartIcon from '../../Cart/CartIcon/CartIcon'
import CartDropDown from '../../Cart/CartDropDown/CartDropDown'
import { showCartIconSelector } from '../../../storeModules/ui/uiSelectors'

const Header = ({ user, sighOutFbAuth, showCartIcon }) => {
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
          <div className="option" onClick={sighOutFbAuth}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {showCartIcon && <CartDropDown />}
    </div>
  )
}

export default connect(
  (state) => ({
    user: userSelector(state),
    showCartIcon: showCartIconSelector(state)
  }),
  { sighOutFbAuth }
)(Header)

//https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
