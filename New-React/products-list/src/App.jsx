import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ProductApp from './components/ProductApp';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/Profile';
import Setting from './components/Setting';

const App = () => {
  let [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <Navbar totalCart={cart.length} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<ProductApp />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/cart' element={<Cart Cart={cart} />}></Route>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='profile' element={<Profile />}></Route>
             <Route path='setting' element={<Setting />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
