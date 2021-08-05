import React from "react";
import "./CollectionsOverview.styles.scss";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors.js";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.jsx";

const CollectionsOverview = () => {
  const shopData = useSelector(selectCollectionsForPreview);

  return (
    <div className="collections-overview">
      {shopData.map(({ id, ...otherShopDataProps }) => (
        <CollectionPreview key={id} {...otherShopDataProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
