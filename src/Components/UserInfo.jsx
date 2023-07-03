import React from 'react'

const UserInfo = ({ users }) => {
  return (
      <div>
      <h1>     UserInfo</h1>
      {users.map((user) => (
        <div className='diiv' style={{borderBottom: "1px solid red"}}>
          <h3>First Name: {user.firstName}</h3>
          <h3>Last Name: {user.lastName}</h3>
          <h3>Email Address: {user.emailAddress}</h3>
          <h3>Phone Number: {user.phoneNumber}</h3>
        </div>
      ))}
    </div>
    
  )
}

export default UserInfo