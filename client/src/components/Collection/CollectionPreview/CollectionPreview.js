import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import { withRouter } from 'react-router-dom'

import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './CollectionPreview.styles'

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>

      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default withRouter(React.memo(CollectionPreview))
