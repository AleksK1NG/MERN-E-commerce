import React from 'react'
import SignIn from '../../components/SinginAndSignup/SignIn/SignIn'
import SignUp from '../../components/SinginAndSignup/SignUp/SignUp'

import { SignInAndSignUpContainer } from './SignInAndSignUpPage.styles'

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  )
}

export default SignInAndSignUpPage
