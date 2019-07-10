import React from 'react'
import { connect } from 'react-redux'
import { useForm } from '../../../hooks/useForm'
import FormInput from '../../Shared/FormInput/FormInput'
import CustomButton from '../../Shared/CustomButton/CustomButton'
import { signInWithEmail, signInWithGoogleAction } from '../../../storeModules/auth/authActions'
import { toast } from 'react-toastify'

import { ButtonsBarContainer, SignInContainer, SignInTitle } from './SignIn.styles'

const SignIn = ({ signInWithEmail, signInWithGoogleAction }) => {
  const [values, handleChange, setValues] = useForm({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!values.email || !values.password) {
      return toast.error('Passwords and Email is required')
    }

    signInWithEmail(values)
    setValues({ email: '', password: '' })
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" handleChange={handleChange} value={values.email} label="email" required />
        <FormInput
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogleAction} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

export default connect(
  null,
  { signInWithEmail, signInWithGoogleAction }
)(SignIn)
