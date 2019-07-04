import React from 'react'
import './Signin.styles.scss'
import { useForm } from '../../../hooks/useForm'

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
        <input type="email" name="email" value={values.email} onChange={handleChange} required />
        <label htmlFor="">Email</label>
        <input type="password" name="password" value={values.password} onChange={handleChange} required />
        <label htmlFor="">Password</label>

        <input type="submit" value="Submit form" />
      </form>
    </div>
  )
}

export default Signin
