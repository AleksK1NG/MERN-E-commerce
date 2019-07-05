import React from 'react'
import { connect } from 'react-redux'
import { useForm } from '../../../hooks/useForm'
import FormInput from '../../Shared/FormInput/FormInput'
import './Signin.styles.scss'
import CustomButton from '../../Shared/CustomButton/CustomButton'
import { signInWithGoogle } from '../../../firebase/firebase.utils'
import { signInWithEmail } from '../../../storeModules/auth/authActions'
import { toast } from 'react-toastify'

const SignIn = ({ signInWithEmail }) => {
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
    <div className="sing-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" value={values.email} handleChange={handleChange} required label="Email" />
        <FormInput
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          required
          label="Password"
        />

        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignin>
            {' '}
            Sign in With Google{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default connect(
  null,
  { signInWithEmail }
)(SignIn)
