import React from 'react'
import './FormInput.styles.scss'

const FormInput = ({ handleChange, label, ...otherFormProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherFormProps}
      />
      {label && (
        <label
          className={`form-input-label ${
            otherFormProps.value.length && 'shrink'
          }`}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput
