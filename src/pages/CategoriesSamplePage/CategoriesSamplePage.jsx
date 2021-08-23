import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import { fetchCollectionsStart } from "redux/shop/shop.actions.js";

import CollectionsOverviewContainer from "components/CollectionsOverview/CollectionsOverview.container.js";
import CollectionPageContainer from "pages/CollectionPage/CollectionPage.container.js";

const CategoriesSamplePage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </>
  );
};

export default CategoriesSamplePage;
