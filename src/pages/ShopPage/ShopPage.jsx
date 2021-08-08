import React from "react";

import { Route } from "react-router-dom";

import CollectionsOverview from "components/CollectionsOverview/CollectionsOverview.jsx";
import CollectionPage from "pages/CollectionPage/CollectionPage.jsx";

const ShopPage = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </>
  );
};
export default ShopPage;
