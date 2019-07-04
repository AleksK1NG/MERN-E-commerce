import React from 'react'
import './Directory.styles.scss'
import { sections } from './sections'
import MenuItem from '../MenuItem/MenuItem'

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem {...otherSectionProps} key={id} />
      ))}
    </div>
  )
}

export default Directory
