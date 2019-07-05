import React from 'react'
import './SigninAndSignupPage.styles.scss'
import SignIn from '../../components/SinginAndSignup/SignIn/SignIn'
import SignUp from '../../components/SinginAndSignup/SignUp/SignUp'

const SigninAndSignupPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SigninAndSignupPage
