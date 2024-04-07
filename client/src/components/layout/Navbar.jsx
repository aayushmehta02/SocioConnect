import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar bg-dark">
      <h1>
        <Link to='/'><i className="fas fa-code"></i> SocioConnect</Link>
      </h1>
      <ul>
        <li><a href="/profiles">Developers</a></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
    
    </div>
  )
}
