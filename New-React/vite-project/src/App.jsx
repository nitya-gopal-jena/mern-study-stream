import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import Dashboard from './components/component-composition/Dashboard';
// import Home from './components/component-composition/Home';
// import Movies from './components/component-composition/Movies';
// import MovieList from './components/component-composition/MovieList';
// import HeroApp from './components/HeroApp';
// import TodoApp from './components/to-do-list/TodoApp';
// import TodoList from './components/to-do-list/TodoList';

import Products1 from './components/class-based-comp/Products1'

const App = () => {
  let [movies, setMovies] = useState([
    { id: 101, name: 'Leo' },
    { id: 102, name: 'RRR' },
    { id: 103, name: 'Black Panthar' },
  ]);

  
  return (
    <>
      <Navbar />

      {/* <Dashboard>
        <Home>
          <Movies>
            {movies.map((movie) => (
              <MovieList movie={movie} />
            ))}
          </Movies>
        </Home>
      </Dashboard> */}

      <Products1/>

    </>
  );
};

export default App;
