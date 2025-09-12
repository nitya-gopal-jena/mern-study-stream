import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Router>

        <Navbar/>
        <Routes>
          
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
