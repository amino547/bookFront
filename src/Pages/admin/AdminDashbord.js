import React from 'react'

const AdminDashbord = ({logout}) => {
  return (
    <div>AdminDashbord
<button   onClick={()=>logout()} >logout</button>


    </div>
  )
}

export default AdminDashbord