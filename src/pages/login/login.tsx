import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../components/AuthProvider'
import './login.css'

const LoginPage = () => {
  const { setAuth, setUser, auth } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (auth) {
      navigate('/', { replace: true })
    }
  }, [auth, navigate])

  const handleSubmit = () => {
    setAuth(true)
    setUser({
      username: username,
      token: `this is token: ${password}`,
    })
    navigate('/', { replace: true })
  }
  return (
    <div className="login-container">
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <div className="login-input">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-input">
          <input
            type="pasword"
            placeholder="pasword"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
