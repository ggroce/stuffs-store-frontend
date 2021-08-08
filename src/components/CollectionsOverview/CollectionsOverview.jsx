import React from "react";
import * as S from "./CollectionsOverview.styles.js";

import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "redux/shop/shop.selectors.js";

import CollectionPreview from "components/CollectionPreview/CollectionPreview.jsx";

const CollectionsOverview = () => {
  const shopData = useSelector(selectCollectionsForPreview);

  return (
    <S.CollectionsOverviewContainer>
      {shopData.map(({ id, ...otherShopDataProps }) => (
        <CollectionPreview key={id} {...otherShopDataProps} />
      ))}
    </S.CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
