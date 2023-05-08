import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import jwt from 'jwt-decode'

export default function Profile() {
  const [user, setUser] = useState()
  const userToken = jwt(localStorage.getItem('token'))

  const getUser = useCallback(async () => {
    try {
      await fetch('http://localhost:8081/hs-login-system/api/user', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then((respose) => {
          if (respose.ok) {
            return respose.json()
          }
          throw new Error('error')
        })
        .then((data) => {
          setUser(data.status)
        })
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <div className="profile">
      <h2>Profile</h2>
      {user && (
        <>
          <label>Name: {user.name}</label>
          <label>Last Name: {user.lastname}</label>
          <label>Username: {user.username}</label>
          <label>Email: {user.email}</label>
        </>
      )}
      <h2>User from token</h2>
      {userToken && (
        <>
          <label>Name: {userToken.user.name}</label>
          <label>Last Name: {userToken.user.lastname}</label>
          <label>Username: {userToken.user.username}</label>
          <label>Email: {userToken.user.email}</label>
        </>
      )}
      <Link to="/">Home</Link>
    </div>
  )
}
