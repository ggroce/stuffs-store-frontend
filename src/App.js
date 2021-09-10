import React, { lazy, Suspense, useEffect } from "react";
import { GlobalStyle } from "global.styles.js";

import { Switch, Route, Redirect } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user//user.selectors.js";
import { checkUserSession } from "redux/user/user.actions";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

const HomePage = lazy(() => import("pages/HomePage/HomePage.jsx"));
const CategoriesSamplePage = lazy(() =>
  import("pages/CategoriesSamplePage/CategoriesSamplePage.jsx")
);
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
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
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
          <Route path="/shop" component={CategoriesSamplePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
