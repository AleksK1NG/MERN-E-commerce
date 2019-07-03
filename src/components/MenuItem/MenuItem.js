import React from 'react'
import './MenuItem.styles.scss'

const MenuItem = ({ title }) => {
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default React.memo(MenuItem)
