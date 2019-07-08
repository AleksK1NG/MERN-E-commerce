import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { sections } from './sections'

import { DirectoryMenuContainer } from './Directory.styles'

const Directory = () => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  )
}

export default Directory
