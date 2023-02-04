import React, { useState } from 'react'
import Register from '../component/Register/Register'
import { register } from '../utils/api'
import useInput from '../hooks/UseInput'

export default function RegisterPage() {
  
  return (
    <Register register={register} useInput={useInput} />
  )
}
