import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h2>This is About</h2>
          <Link to={'carrer'}>Carrer</Link>
          <br />
          <Link to={'subscription'}>Subscription</Link>
        </div>

        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default About;
