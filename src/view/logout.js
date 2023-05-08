import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigate = useNavigate()
  useEffect(() => {
    localStorage.removeItem('token')
    navigate('/')
  },[true])

  return (
    <></>
  )
}
