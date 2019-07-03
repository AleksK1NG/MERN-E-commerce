import React from 'react'
import './Signin.styles.scss'
import { useForm } from '../../../hooks/useForm'

const Signin = () => {
  const [values, handleChange] = useForm({ email: "", password: "" })
  return (
    <div>
      Signin
    </div>
  )
}

export default Signin
