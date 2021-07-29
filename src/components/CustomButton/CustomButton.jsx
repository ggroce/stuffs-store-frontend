import React from 'react'
import './CustomButton.styles.scss'

const CustomButton = (props) => {
  return (
    <button className="custom-button" {...props}>
      {props.children}
    </button>
  )
}

export default CustomButton
