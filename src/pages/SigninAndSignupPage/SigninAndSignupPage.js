import React from 'react'
import './SigninAndSignupPage.styles.scss'
import SignIn from '../../components/SinginAndSignup/Signin/SignIn'
import SignUp from '../../components/SinginAndSignup/Signup/SignUp'

const SigninAndSignupPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SigninAndSignupPage
