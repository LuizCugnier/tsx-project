import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={'/'} className="navbar-item">
        Home
      </NavLink>
      <NavLink to={'/create-post'} className="navbar-item">
        Create Post
      </NavLink>
      <NavLink to={'/login'} className="navbar-item">
        Login
      </NavLink>
      <NavLink to={'/create-user'} className="navbar-item">
        Create User
      </NavLink>
    </div>
  )
}

export default Navbar
