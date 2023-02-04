import React from 'react'
import Login from '../component/Login/Login'
import useInput from '../hooks/UseInput'
import { getUserLogged, login, putAccessToken } from '../utils/api'

export default function LoginPage() {
  return (
    <Login useInput={useInput} putAccessToken={putAccessToken} getUserLogged={getUserLogged} login={login} />
  )
}
