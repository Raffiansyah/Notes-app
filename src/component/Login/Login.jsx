import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../Context/UserContext';
import './login.scss'


export default function Login({ useInput, getUserLogged, login, putAccessToken }) {
  const {setUser} = useContext(UserContext)
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    login({email, password}).then((res) => {
      if(!res.error){
        putAccessToken(res.data.accessToken)
        getUserLogged().then((res)=> {
          if(!res.error){
            setUser(res.data)
            
          } else {
            setUser(null)
          }
          navigate('/')
        })
      }
    })
  }

  return (
    <section className='login-app'>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' value={email} onChange={setEmail} required />
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={setPassword} required />
        <button type='submit'>Login</button>
      </form>
      <p>Don't Have Account? 
        <Link to='/register'> Register Here</Link>
      </p>
    </section>
  )
}
