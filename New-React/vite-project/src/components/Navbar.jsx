function Navbar() {
  return (
    <>
      <nav className='navbar bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            <i className='fa-solid fa-cart-arrow-down'></i> MoviesClub
          </a>
          <button className='btn btn-warning' style={{ marginRight: '25px', width: '100px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
            Login
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
