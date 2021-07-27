import React from 'react'
import './Directory.styles.scss'
import sections from './Directory.sections.js'
import MenuItem from '../menu-item/MenuItem'

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
