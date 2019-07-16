import React from 'react'
import { connect } from 'react-redux'
import { addCartItem, clearItemFromCart, deleteCartItem } from '../../../storeModules/cart/cartActions'

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer
} from './CheckoutItem.styles'

export const CheckoutItem = ({ cartItem, deleteCartItem, addCartItem, clearItemFromCart }) => {
  const { imageUrl, name, quantity, price } = cartItem

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => deleteCartItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addCartItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

export default connect(
  null,
  { deleteCartItem, addCartItem, clearItemFromCart }
)(CheckoutItem)
