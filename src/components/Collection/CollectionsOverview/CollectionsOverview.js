import React from 'react'
import { connect } from 'react-redux'
import './CollectionsOverview.styles.scss'
import { shopCollectionsSelector } from '../../../storeModules/shop/shopSelectors'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import { fetchCollections } from '../../../storeModules/shop/shopActions'

const CollectionsOverview = ({ collections, fetchCollections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default connect(
  (state) => ({
    collections: shopCollectionsSelector(state)
  }),
  { fetchCollections }
)(CollectionsOverview)
