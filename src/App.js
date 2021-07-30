import React, { useEffect } from 'react'
import './App.scss'
import { Switch, Route } from 'react-router'
import Header from './components/Header/Header.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import ShopPage from './pages/ShopPage/ShopPage.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

function App() {
  const [currentUser, setCurrentUser] = React.useState(null)

  useEffect(() => {
    let unsubscribeFromAuth = null
    unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user)
      createUserProfileDocument(user)
    })

    return () => {
      unsubscribeFromAuth && unsubscribeFromAuth()
    }
  }, [])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/auth" component={AuthenticationPage} />
        <Route path="/shop" component={ShopPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
