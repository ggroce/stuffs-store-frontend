import React from "react";
import * as S from "./Directory.styles.js";

import { useSelector } from "react-redux";
import { selectDirectorySections } from "redux/directory/directory.selectors.js";

import MenuItem from "components/MenuItem/MenuItem.jsx";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <S.DirectoryContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </S.DirectoryContainer>
  );
};

export default Directory;
