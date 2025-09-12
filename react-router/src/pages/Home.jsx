import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const email = location.state?.email || 'Guest';
  return (
    <>
      <h2 style={{textAlign:"center", marginTop:'15%', fontSize:'30px', color:'green'}}>Hi, welcome back {email}</h2>
    </>
  );
};

export default Home;
