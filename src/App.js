import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";

import { Switch, Route, Redirect } from "react-router";
import { auth, createUserProfileDocument } from "firebase/firebase.utils";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "redux/user/user.actions";
import { selectCurrentUser } from "redux/user//user.selectors.js";

import Header from "components/Header/Header.jsx";

const HomePage = lazy(() => import("pages/HomePage/HomePage.jsx"));
const ShopPage = lazy(() => import("pages/ShopPage/ShopPage.jsx"));
const AuthenticationPage = lazy(() =>
  import("pages/AuthenticationPage/AuthenticationPage.jsx")
);
const CheckoutPage = lazy(() => import("pages/CheckoutPage/CheckoutPage.jsx"));
const NotFound = lazy(() => import("pages/NotFound/NotFound.jsx"));

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(setCurrentUser(snapShot.data()));
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => {
      unsubscribeFromAuth && unsubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/auth"
            render={() =>
              currentUser ? <Redirect to="/" /> : <AuthenticationPage />
            }
          />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
