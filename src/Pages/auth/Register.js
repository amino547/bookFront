import React, { useState } from 'react'
import './auth.css'
import { RegisterAuth } from '../../api/authApi'
import { useNavigate } from 'react-router-dom'
const Register = () => {
const Navigate = useNavigate()
  const [userName,setUseName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()


  const AddingUser=async(values)=>{
    await RegisterAuth(values)
    await alert('c bon el user zidneh')
    Navigate('/login')
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
  
              <input type="text" name="userName"  value={userName}  onChange={(e)=>setUseName(e.target.value)}  />
              <input type="text" name="email"  value={email}  onChange={(e)=>setEmail(e.target.value)}    />
              <input type="password" name="password"   value={password}  onChange={(e)=>setPassword(e.target.value)}  />
  
              <button type="button" name="" value="register"   onClick={()=>AddingUser({userName,email,password})}  >Register</button>
              <p class="signup">
                Login?
                <a href="/login">Login ? </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Register