import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const [token, setToken] = useState(localStorage.getItem('@TokenKenzieHub'))
  return (
    <div>
      {token?'Home':<Navigate to='/login' />}
      <h1>Kenzie Hub</h1>
      <button onClick={() => {
        localStorage.removeItem('@TokenKenzieHub')
        setToken(null)
      }}>Sair</button>
    </div>
  )
}

export default Home