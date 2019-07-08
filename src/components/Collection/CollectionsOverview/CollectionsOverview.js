import React from 'react'
import { connect } from 'react-redux'
import { collectionsForPreviewSelector } from '../../../storeModules/shop/shopSelectors'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import { fetchCollections } from '../../../storeModules/shop/shopActions'

import { CollectionsOverviewContainer } from './CollectionsOverview.styles'

const CollectionsOverview = ({ collections, fetchCollections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  )
}

export default connect(
  (state) => ({
    collections: collectionsForPreviewSelector(state)
  }),
  { fetchCollections }
)(CollectionsOverview)
