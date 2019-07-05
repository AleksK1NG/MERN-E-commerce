import React from 'react'
import { connect } from 'react-redux'
import { useForm } from '../../../hooks/useForm'
import FormInput from '../../Shared/FormInput/FormInput'
import CustomButton from '../../Shared/CustomButton/CustomButton'
import { toast } from 'react-toastify'

import './Signup.styles.scss'
import { signUpWithEmail } from '../../../storeModules/auth/authActions'

const SignUp = ({ signUpWithEmail }) => {
  const [values, handleChange, setValues] = useForm({ email: '', password: '', confirmPassword: '', displayName: '' })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Submit SignUp form => ', values)

    if (values.password !== values.confirmPassword) {
      return toast.error('Passwords doesnt match')
    }
    signUpWithEmail(values)
    setValues({ email: '', password: '', confirmPassword: '', displayName: '' })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={values.displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput type="email" name="email" value={values.email} handleChange={handleChange} required label="Email" />
        <FormInput
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          required
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          handleChange={handleChange}
          required
          label="Confirm Password"
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default connect(
  null,
  { signUpWithEmail }
)(SignUp)
