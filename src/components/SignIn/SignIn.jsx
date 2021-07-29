import React from 'react'
import './SignIn.styles.scss'
import FormInput from '../FormInput/FormInput'

const SignIn = () => {
  const [loginCredentials, setLoginCredentials] = React.useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginCredentials({ ...loginCredentials, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2>Have account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          value={loginCredentials.email}
          handleChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          required
          value={loginCredentials.password}
          handleChange={handleChange}
        />
        <input type="submit" value="Sign in" />
      </form>
    </div>
  )
}

export default SignIn
