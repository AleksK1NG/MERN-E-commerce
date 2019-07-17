import React from 'react'
import { connect } from 'react-redux'
import { useForm } from '../../../hooks/useForm'
import FormInput from '../../Shared/FormInput/FormInput'
import CustomButton from '../../Shared/CustomButton/CustomButton'
import { toast } from 'react-toastify'

import { registerUserRequest, signUpWithEmail } from '../../../storeModules/auth/authActions'

import { SignUpContainer, SignUpTitle } from './SignUp.styles'

const SignUp = ({ signUpWithEmail, registerUserRequest }) => {
  const [values, handleChange, setValues] = useForm({ email: '', password: '', confirmPassword: '', username: '' })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (values.password !== values.confirmPassword) {
      return toast.error('Passwords doesnt match')
    }
    registerUserRequest(values)
    setValues({ email: '', password: '', confirmPassword: '', username: '' })
  }

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>

      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          label="User Name"
          required
        />

        <FormInput type="email" name="email" value={values.email} onChange={handleChange} label="Email" required />

        <FormInput
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  )
}

export default connect(
  null,
  { signUpWithEmail, registerUserRequest }
)(SignUp)
