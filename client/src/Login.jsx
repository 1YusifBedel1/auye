import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'
import axios from 'axios'
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/login",{name,email,password})
        .then(res=>{console.log(res)
            navigate("/")
        })
        .catch(err=>console.log(err))
    }
    return (
        <div class="login-box">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div class="user-box">
                    <input type="email" required="" onChange={(e)=>{
                        setEmail(e.target.value)
                    }} />
                    <label>Email</label>
                </div>
                <div class="user-box">
                    <input type="password" required="" onChange={(e)=>{
                        setPassword(e.target.value)
                    }} />
                    <label>Password</label>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login