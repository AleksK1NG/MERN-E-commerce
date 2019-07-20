import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import MenuItem from '../MenuItem/MenuItem'
// import { sections } from './sections'

import { DirectoryMenuContainer } from './Directory.styles'
import { getSectionsRequest } from '../../storeModules/shop/shopActions'
import { sectionsSelector, shopLoadingSelector } from '../../storeModules/shop/shopSelectors'
import Spinner from '../Shared/Spinner/Spinner'

export const Directory = ({ getSectionsRequest, sections, isLoading }) => {
  useEffect(() => {
    getSectionsRequest()
  }, [getSectionsRequest])

  if (!sections || isLoading) return <Spinner />
  return (
    <DirectoryMenuContainer>
      {sections.map(({ _id, ...otherSectionProps }) => (
        <MenuItem key={_id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  )
}

export default connect(
  (state) => ({
    sections: sectionsSelector(state),
    isLoading: shopLoadingSelector(state)
  }),
  { getSectionsRequest }
)(Directory)
