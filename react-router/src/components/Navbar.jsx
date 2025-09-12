import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
const navigate = useNavigate()

  function navToLogin() {
    navigate('./login')
  }

  return (
    <>
      <nav className='navbar'>
        <div className="left-side">
          <h2>NG<span>J.</span> </h2>
        </div>

        <div className="nav-items">
          <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/login'}>Login</Link>
        </div>

        <div className="login">
          <button className='btn-login' onClick={navToLogin}>Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
