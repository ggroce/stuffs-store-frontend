import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { requestCollectionsStartAsync } from "redux/shop/shop.actions.js";
import { selectIsCollectionLoaded } from "redux/shop/shop.selectors.js";

import { Route } from "react-router-dom";

import CollectionsOverview from "components/CollectionsOverview/CollectionsOverview.jsx";
import CollectionPage from "pages/CollectionPage/CollectionPage.jsx";
import WithSpinner from "components/WithSpinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(selectIsCollectionLoaded);

  useEffect(() => {
    dispatch(requestCollectionsStartAsync());
  }, []);

  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={isLoaded} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoaded={isLoaded} {...props} />
        )}
      />
    </>
  );
};

export default ShopPage;
