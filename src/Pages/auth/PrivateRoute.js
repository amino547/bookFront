import React, { useEffect, useState } from 'react'
import { FetchUser } from '../../api/authApi'
import UserDashbord from '../user/UserDashbord'
import AdminDashbord from '../admin/AdminDashbord'
import { useNavigate } from 'react-router-dom'


const PrivateRoute = () => {
const navigate = useNavigate()
    const [userInfo,setUserInfo]=useState({})

const geteUser=async()=>{
const data = await FetchUser()
console.log('data user private route compo', data.data)
const user = data.data
console.log('user private =>',user)
setUserInfo(user)
}

console.log('userInfo=>',userInfo)
useEffect(()=>{
    geteUser()
},[])

const logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
}


  return (


    <div>

{
    userInfo.role==="User" ? <UserDashbord logout={logout}  /> : <AdminDashbord logout={logout}   />
}


    </div>
  )
}

export default PrivateRoute