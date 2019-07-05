import React from 'react'
import './SigninAndSignupPage.styles.scss'
import Signin from '../../components/SinginAndSignup/Signin/Signin'
import Signup from '../../components/SinginAndSignup/Signup/Signup'

const SigninAndSignupPage = () => {
  return (
    <div>
      <Signin />
      <Signup />
    </div>
  )
}

export default SigninAndSignupPage
