import React, { useState } from 'react'
import './auth.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const Login = () => {
  const Navigate = useNavigate()

  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

const LoginUser=async(values)=>{
  try{
const res = await axios.post('http://localhost:5000/user/login',values)
await console.log('res login component', res.data.token)
await localStorage.setItem('token',res.data.token)
await ('alerte welcome, u will go the ur right page')
Navigate('/PrivateRoute')
  }catch(err){
    console.log(err)
  }
}




  return (
    <div><section class="bodyAuth">
    <div class="sectionAuth">
      <div class="container">
        <div class="user signinBx">
          <div class="imgBx">
            <img src="https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Blog.jpg?resize=740%2C524&ssl=1" alt="" />
          </div>
          <div class="formBx">
            <form>
              <h2>Sign In</h2>
              <input type="email" name="" placeholder="email"  value={email} onChange={(e)=>setEmail(e.target.value)}  />
              <input type="password" name="" placeholder="Password"   value={password} onChange={(e)=>setPassword(e.target.value)} />
  
              <button type="button" name="" value="Login"  onClick={()=>LoginUser({email,password})}   >Login</button>
              
              
              
              
              
              <p class="signup">
                Login
                <a href="/">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}
