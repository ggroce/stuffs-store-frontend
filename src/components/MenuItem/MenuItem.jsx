import React from "react";
import * as S from "./MenuItem.styles.js";

import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <S.MenuItemContainer
    $size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <S.BackgroundImageContainer $imageUrl={imageUrl} />
    <S.ContentContainer>
      <h2>{title.toUpperCase()}</h2>
      <span>SHOP NOW</span>
    </S.ContentContainer>
  </S.MenuItemContainer>
);

export default withRouter(MenuItem);
