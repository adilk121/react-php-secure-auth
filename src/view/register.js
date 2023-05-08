import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const nameHandler = (event) => {
    setName(event.target.value)
  }

  const lastnameHandler = (event) => {
    setLastName(event.target.value)
  }

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }

  const emailHandler = (event) => {
    setEmail(event.target.value)
  }

  async function registerRequest() {
    try {
      await fetch('http://localhost/api/api.php/register', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          lastname: lastname,
          username: username,
          password: password,
          email: email,
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
            localStorage.setItem('token', data.status)
            navigate('/confirm')
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
    registerRequest()
  }

  return (
    <form className="register-form" onSubmit={submitHandler}>
      <h2>Register</h2>
      <label>Name</label>
      <input type="text" value={name} onChange={nameHandler} />
      <label>Last Name</label>
      <input type="text" value={lastname} onChange={lastnameHandler} />
      <label>Username</label>
      <input type="text" value={username} onChange={usernameHandler} />
      <label>Password</label>
      <input type="password" value={password} onChange={passwordHandler} />
      <label>Email</label>
      <input type="text" value={email} onChange={emailHandler} />
      <button>Register</button>
      <Link to="/login">Login</Link>
    </form>
  )
}
