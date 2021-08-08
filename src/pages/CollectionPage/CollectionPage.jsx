import React from "react";
import * as S from "./CollectionPage.styles.js";

import { useSelector } from "react-redux";
import { selectCollection } from "redux/shop/shop.selectors.js";

import CollectionItem from "components/CollectionItem/CollectionItem.jsx";

const CollectionPage = ({ match }) => {
  const { title, items } = useSelector(
    selectCollection(match.params.collectionId)
  );

  return (
    <S.CollectionPageContainer>
      <h2>{title}</h2>
      <S.ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </S.ItemsContainer>
    </S.CollectionPageContainer>
  );
};

export default CollectionPage;
