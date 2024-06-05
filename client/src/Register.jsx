import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/register",{name,email,password})
        .then(res=>{console.log(res)
            navigate("/login")
        })
        .catch(err=>console.log(err))
    }
    return (
        <div class="login-box">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div class="user-box">
                    <input type="text" required="" onChange={(e)=>{
                        setName(e.target.value)
                    }} />
                    <label>Username</label>
                </div>
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

export default Register