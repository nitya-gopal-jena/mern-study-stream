import React from 'react';
import imge from './../assets/gta.jpg';


let MovieList = [
  {
    id: 101,
    title: 'Avenger',
    year: 2022,
    production: 'Marvel',
    imgUrl: imge,
  },
  {
    id: 102,
    title: 'Avenger',
    year: 2022,
    production: 'Marvel',
    imgUrl: imge,
  },
  {
    id: 103,
    title: 'Avenger',
    year: 2022,
    production: 'Marvel',
    imgUrl: imge,
  },
  {
    id: 104,
    title: 'Avenger',
    year: 2022,
    production: 'Marvel',
    imgUrl: imge,
  },
];

const MovieHome = () => {
  return (
    <>
      <section className='container-fluid mt-4'>
        <div className='row'>
          {MovieList.map((movie, id) => (
            <div className='col-3 p-3' key={id}>
              <div className='card mt-4 shadow-sm'>
                <div className='card-header'>
                  <img src={movie.imgUrl} alt={movie.title} className='img-fluid' />
                </div>
                <div className='card-body'>
                  <h3>Title: {movie.title}</h3>
                  <h3>Year: {movie.year}</h3>
                  <h3>Production: {movie.production}</h3>
                  <button className='btn btn-primary p-2 text-center cursor-pointer'>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MovieHome;
