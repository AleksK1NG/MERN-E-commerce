import React from 'react'
import { connect } from 'react-redux'
import { addCartItem } from '../../../storeModules/cart/cartActions'

import {
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  CollectionItemContainer,
  NameContainer,
  PriceContainer
} from './CollectionItem.styles'

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />

      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>

      <AddButton onClick={() => addCartItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
}

export default connect(
  null,
  { addCartItem }
)(CollectionItem)
