import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ totalCart }) => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-success'>
        <div className='container-fluid'>
          <Link className='brand-name navbar-brand d-flex align-items-center' to='/'>
            <i className='bi bi-cart-check-fill cart'></i>
            E-Commerce
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarContent'
            aria-controls='navbarContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='navbar-items'>
            <div className='items'>
              <Link to='/'>Home</Link>
              <Link to='/product'>Products</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/cart'>Cart</Link>
              <Link to='/dashboard'>Dashboard</Link>
            </div>
          </div>

          <div className='collapse navbar-collapse justify-content-end' id='navbarContent'>
            <button className='cart-icon'>
              <i className='bi bi-cart-check-fill'></i>{' '}
              <span className='text-black' style={{ fontSize: '18px' }}>
                {' '}
                Total Cart No: 0
              </span>
            </button>
            <button className='login-btn'>Login</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
