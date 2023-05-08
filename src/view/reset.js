import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ResetPassword() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  async function resetRequest() {
    try {
      await fetch('http://localhost:8081/hs-login-system/api/reset', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
        }),
      })
        .then((respose) => {
          if (respose.ok) {
            return respose.json()
          }
          throw new Error('error')
        })
        .then((data) => {
          if (data.status) {
            navigate('/')
          } else {
            //set error
          }
        })
    } catch (error) {
      console.log(error.message)
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()
    resetRequest()
  }

  return (
    <form className="register-form" onSubmit={submitHandler}>
      <h2>Reset Password</h2>
      <label>Username or Email</label>
      <input type="text" value={username} onChange={usernameHandler} />
      <button>Reset Password</button>
      <Link to="/login">Login</Link>
    </form>
  )
}
