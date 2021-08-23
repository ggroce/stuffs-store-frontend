import React from "react";
import * as S from "./CollectionPreview.styles.js";

import CollectionItem from "components/CollectionItem/CollectionItem.jsx";

const CollectionPreview = ({ title, items }) => (
  <S.CollectionPreviewContainer>
    <S.CollectionPreviewTitle>{title.toUpperCase()}</S.CollectionPreviewTitle>
    <S.CollectionCategoryContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <S.CollectionItemContainer key={item.id}>
            <CollectionItem item={item} />
          </S.CollectionItemContainer>
        ))}
    </S.CollectionCategoryContainer>
  </S.CollectionPreviewContainer>
);
export default CollectionPreview;
