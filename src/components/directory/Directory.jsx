import React from 'react';
import './Directory.styles.scss';
import sections from './Directory.sections.js';
import MenuItem from '../menu-item/MenuItem';

const Directory = (props) => {
  
  return (
    <>
      {
        sections.map(({ title, imageUrl, id }) => 
          <MenuItem key={id} title={title} imageUrl={imageUrl} />
        )
      }
    </>
  );
}

export default Directory;