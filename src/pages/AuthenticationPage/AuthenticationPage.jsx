import React from 'react'
import './AuthenticationPage.styles.scss'
import SignIn from '../../components/SignIn/SignIn.jsx'
import SignUp from '../../components/SignUp/SignUp.jsx'

const AuthenticationPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default AuthenticationPage
