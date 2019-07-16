import styled from 'styled-components'

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`

CartItemContainer.displayName = 'CartItemContainer'

export const CartItemImage = styled.img`
  width: 30%;
`

CartItemImage.displayName = 'CartItemImage'

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`
ItemDetailsContainer.displayName = 'ItemDetailsContainer'