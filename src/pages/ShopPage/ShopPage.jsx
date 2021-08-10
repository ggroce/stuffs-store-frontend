import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { loadCollections } from "redux/shop/shop.actions.js";

import { Route } from "react-router-dom";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "firebase/firebase.utils.js";

import CollectionsOverview from "components/CollectionsOverview/CollectionsOverview.jsx";
import CollectionPage from "pages/CollectionPage/CollectionPage.jsx";

const ShopPage = ({ match }) => {
  const unsubscribeFromSnapshot = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(loadCollections(collectionsMap));
    });
  }, []);

  return (
    <>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </>
  );
};
export default ShopPage;
