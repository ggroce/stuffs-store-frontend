import React, { useEffect } from 'react'
import './App.scss'
import { Switch, Route, Redirect } from 'react-router'
import Header from './components/Header/Header.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import ShopPage from './pages/ShopPage/ShopPage.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage.jsx'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user//user.selectors.js'

function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    let unsubscribeFromAuth = null
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          dispatch(setCurrentUser(snapShot.data()))
        })
      } else {
        dispatch(setCurrentUser(userAuth))
      }
    })

    return () => {
      unsubscribeFromAuth && unsubscribeFromAuth()
    }
  }, [])

  return (
    <div>
      <Header />
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
    </div>
  )
}

export default App
