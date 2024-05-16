import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)

  if (!user) {
    return <h2>Not logged In</h2>
  }
  return (
    <div>Profile : {user}
      <h1>More Component</h1></div>
  )
}

export default Profile