import React from 'react'
import './Directory.styles.scss'
import sections from './Directory.sections.js'
import MenuItem from '../MenuItem/MenuItem.jsx'

const Directory = () => {
  return (
    <>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </>
  )
}

export default Directory
