import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { collectionsForPreviewSelector, shopLoadingSelector } from '../../../storeModules/shop/shopSelectors'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import { fetchCollections } from '../../../storeModules/shop/shopActions'

import { CollectionsOverviewContainer } from './CollectionsOverview.styles'
import WithSpinner from '../../../hoc/WithSpinner/WithSpinner'

export const CollectionsOverview = ({ collections, isLoading }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  )
}

export default compose(
  connect(
    (state) => ({
      collections: collectionsForPreviewSelector(state),
      isLoading: shopLoadingSelector(state)
    }),
    { fetchCollections }
  ),
  WithSpinner
)(CollectionsOverview)
