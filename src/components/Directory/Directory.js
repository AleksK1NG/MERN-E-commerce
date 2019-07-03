import React from 'react'
import './Directory.styles.scss'
import { sections } from './sections'
import MenuItem from '../MenuItem/MenuItem'

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, linkUrl, size }) => (
        <MenuItem title={title} key={id} imageUrl={imageUrl} linkUrl={linkUrl} size={size} />
      ))}
    </div>
  )
}

export default Directory
