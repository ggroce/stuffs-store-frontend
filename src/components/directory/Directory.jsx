import React from "react";
import "./Directory.styles.scss";
import sections from "./Directory.sections.js";
import MenuItem from "../menu-item/MenuItem";

const Directory = (props) => {
  return (
    <>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </>
  );
};

export default Directory;
