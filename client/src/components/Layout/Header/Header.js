import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../../assets/crown.svg'
import { userSelector } from '../../../storeModules/auth/authSelectors'
import { logoutUserRequest } from '../../../storeModules/auth/authActions'
import CartIcon from '../../Cart/CartIcon/CartIcon'
import CartDropDown from '../../Cart/CartDropDown/CartDropDown'
import { showCartIconSelector } from '../../../storeModules/ui/uiSelectors'

import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './Header.styles'

export const Header = ({ user, showCartIcon, logoutUserRequest }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        {user && user.email}
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contacts">CONTACTS</OptionLink>
        {user ? (
          <OptionLink as="div" onClick={logoutUserRequest}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {showCartIcon && <CartDropDown />}
    </HeaderContainer>
  )
}

export default connect(
  (state) => ({
    user: userSelector(state),
    showCartIcon: showCartIconSelector(state)
  }),
  { logoutUserRequest }
)(Header)

//https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
