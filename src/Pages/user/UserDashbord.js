import React from 'react'

const UserDashbord = ({logout}) => {
  return (
    <div>UserDashbord
<button   onClick={()=>logout()} >logout</button>

    </div>
  )
}

export default UserDashbord