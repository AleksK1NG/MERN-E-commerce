import React from 'react'
import { connect } from 'react-redux'
import './ShopPage.styles.scss'
import CollectionPreview from '../../components/Collection/CollectionPreview/CollectionPreview'
import { shopCollectionsSelector } from '../../storeModules/shop/shopSelectors'

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  )
}

export default connect(
  (state) => ({
    collections: shopCollectionsSelector(state)
  }),
  {}
)(ShopPage)
