import React from 'react'
import { connect } from 'react-redux'
import { collectionUrlParamSelector } from '../../storeModules/shop/shopSelectors'
import CollectionItem from '../../components/Collection/CollectionItem/CollectionItem'

import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './CollectionPage.styles'
import Spinner from '../../components/Shared/Spinner/Spinner'

const CollectionPage = ({ collection }) => {

  if (!collection) return <Spinner />
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
