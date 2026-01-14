import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <section className='container' style={{ marginTop: '60px', textTransform: 'uppercase' }}>
        <h2 className='text-center text-primary'>Dashboard Component</h2>
      </section>

      <section className='container mt-5 '>
        <div style={{display:'flex', gap:'10px'}}>
          <Link to='profile' style={{textDecoration:'none'}}>Profile</Link>
          <Link to='setting' style={{textDecoration:"none"}}>Setting</Link>
        </div>
      </section>

      <section className='container mt-5 '>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default Dashboard;
