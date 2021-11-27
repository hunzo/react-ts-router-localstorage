import { Link } from 'react-router-dom'
import { useAuth } from '../AuthProvider'
import './navbar.css'

const Navbar = () => {
  const { setAuth } = useAuth()
  return (
    <nav>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <button style={{ marginRight: '10px' }} onClick={() => setAuth(false)}>
        LogOut
      </button>
    </nav>
  )
}

export default Navbar
