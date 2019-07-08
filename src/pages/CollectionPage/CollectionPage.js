import React from 'react'
import { connect } from 'react-redux'
import { collectionUrlParamSelector } from '../../storeModules/shop/shopSelectors'
import CollectionItem from '../../components/Collection/CollectionItem/CollectionItem'

import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './CollectionPage.styles'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

export default connect(
  (state, ownProps) => ({
    collection: collectionUrlParamSelector(ownProps.match.params.collectionId)(state)
  }),
  null
)(CollectionPage)
