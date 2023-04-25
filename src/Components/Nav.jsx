import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import LoginForm from './LoginForm'

const Nav = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
      <nav>
      <Link to='/'>
        <h1>LOGO</h1>
      </Link>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/accaunt'>
          <li>Accaunt</li>
        </Link>
        <Link to='/contact'>          
          <li>Contact</li>
        </Link>      
      </ul>
      <button onClick={()=>{setShowLogin(true)}}>Login</button>
      
      </nav>
      {showLogin && <LoginForm setShowLogin={setShowLogin}/>}
    </>
  )
}

export default Nav
