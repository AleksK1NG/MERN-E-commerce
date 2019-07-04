import React from 'react'
import { useForm } from '../../../hooks/useForm'
import FormInput from '../../Shared/FormInput/FormInput'
import './Signin.styles.scss'
import CustomButton from '../../Shared/CustomButton/CustomButton'

const Signin = () => {
  const [values, handleChange, setValues] = useForm({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Submit form => ', values)

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

        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  )
}

export default Signin
