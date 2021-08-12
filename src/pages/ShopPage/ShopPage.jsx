import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { loadCollections } from "redux/shop/shop.actions.js";

import { Route } from "react-router-dom";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "firebase/firebase.utils.js";

import CollectionsOverview from "components/CollectionsOverview/CollectionsOverview.jsx";
import CollectionPage from "pages/CollectionPage/CollectionPage.jsx";
import WithSpinner from "components/WithSpinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let unsubscribeFromSnapshot = null;

    const collectionRef = firestore.collection("collections");
    unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(loadCollections(collectionsMap));
      setIsLoading(false);
    });

    return () => {
      unsubscribeFromSnapshot && unsubscribeFromSnapshot();
    };
  }, []);

  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </>
  );
};

export default ShopPage;
