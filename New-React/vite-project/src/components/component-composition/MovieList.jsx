import React from 'react';

const MovieList = ({  movie }) => {
  return (
    <>
          <h2>This is movie List</h2>
          
          {movie.name}
    </>
  );
};

export default MovieList;
