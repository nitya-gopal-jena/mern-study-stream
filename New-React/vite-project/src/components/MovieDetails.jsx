import React from 'react';
import gta from './../assets/gta.jpg';

const MovieDetails = () => {
  return (
    <>
      <section className='container mt-4'>
        <div className='movie-details'>
          <div className='card'>
            <div className='card-header'>
              <img src={gta} alt='' />
            </div>

            <div className='card-body'>
              <h4>Title: </h4>
              <h4>Year: </h4>
              <h4>Production: </h4>
              <h4>Actor: </h4>
              <h5>Description</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
