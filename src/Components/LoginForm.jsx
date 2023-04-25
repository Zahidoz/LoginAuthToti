import React, {useState} from 'react'
import users from '../Data/users.json'
import {useNavigate} from 'react-router-dom'

const LoginForm = ({ setShowLogin }) => {
    const [showError,setShowError] = useState(false)
    const navigate = useNavigate()

    const SubmitHandle = (e) => {
        e.preventDefault() // refresh qarsisini alir
        const data = new FormData(e.target)
        const formProperties = Object.fromEntries(data)


        const result = users.find(item => {
            return item.finCode === formProperties.finCode && item.password === formProperties.password
        })
        result ? navigate('/accaunt') : setShowError(true)
    }

    return (
        <form onSubmit={SubmitHandle}>
            <p onClick={() => setShowLogin(false)}>X</p>
            <h1>Login</h1>
            <input onChange={()=>setShowError(false)} name='finCode' required type="text" placeholder='username' />
            <input onChange={()=>setShowError(false)}name='password' required type="password" placeholder='password' />
            <button type='submit'>Submit</button>
           {showError &&  <span>Wrang username or password</span>}
        </form>
    )
}

export default LoginForm
