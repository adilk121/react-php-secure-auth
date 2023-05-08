import { Route, Routes } from 'react-router-dom'
import AccountConfirm from './view/confirm'
import Home from './view/home'
import Login from './view/login'
import Logout from './view/logout'
import Profile from './view/profile'
import Register from './view/register'
import ResetPassword from './view/reset'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<AccountConfirm />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  )
}

export default App
