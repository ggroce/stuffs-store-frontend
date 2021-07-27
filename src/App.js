import React from 'react'
import './App.scss'
import Header from './components/header/header.jsx'
import HomePage from './pages/homepage/HomePage.jsx'
import ShopPage from './pages/shop/ShopPage.jsx'
import { Switch, Route } from 'react-router'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
