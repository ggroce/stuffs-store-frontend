import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";

import { Switch, Route, Redirect } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user//user.selectors.js";
import { checkUserSession } from "redux/user/user.actions";

import Header from "components/Header/Header.jsx";

const HomePage = lazy(() => import("pages/HomePage/HomePage.jsx"));
const ShopPage = lazy(() => import("pages/ShopPage/ShopPage.jsx"));
const AuthenticationPage = lazy(() =>
  import("pages/AuthenticationPage/AuthenticationPage.jsx")
);
const CheckoutPage = lazy(() => import("pages/CheckoutPage/CheckoutPage.jsx"));
const NotFound = lazy(() => import("pages/NotFound/NotFound.jsx"));

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
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
