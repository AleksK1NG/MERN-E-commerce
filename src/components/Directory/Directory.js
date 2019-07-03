import React from 'react'
import './Directory.styles.scss'
import { sections } from './sections'
import MenuItem from '../MenuItem/MenuItem'

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title }) => (
        <MenuItem title={title} key={id} />
      ))}
    </div>
  )
}

export default Directory
