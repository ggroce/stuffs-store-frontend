import React from "react";
import "./Directory.styles.scss";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors.js";
import MenuItem from "../MenuItem/MenuItem.jsx";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </>
  );
};

export default Directory;
