import React from 'react'
import './Header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils.js'
import { useSelector } from 'react-redux'

const Header = () => {
  const { currentUser } = useSelector((state) => state.user)

  const logoutUser = () => {
    auth.signOut()
  }

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {currentUser ? (
          <>
            <div className="option" onClick={logoutUser}>
              LOGOUT
            </div>
            <div className="logged-in-as">
              LOGGED IN AS: {currentUser.displayName.substring(0, 14)}
              {currentUser.displayName.length > 15 && '...'}
            </div>
          </>
        ) : (
          <Link className="option" to="/auth">
            LOGIN
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
