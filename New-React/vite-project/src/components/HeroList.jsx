import React from 'react';
import { heroInfo } from './../utils/heroInfo';
let data = heroInfo();
console.log(data);

const HeroList = ({ onHeroSelect }) => {
  return (
    <>
      <div className='col-8 mt-2'>
        <table className='table table-bordered table-striped table-hover text-center'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Movies</th>
              <th scope='col'>Age</th>
              <th scope='col'>Place</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user) => {
              let { id, hName, age, movies, place } = user;

              return (
                <tr key={id} onClick={() => onHeroSelect(user)} style={{ cursor: 'pointer' }}>
                  <td>{id}</td>
                  <td>{hName}</td>
                  <td>{movies}</td>
                  <td>{age}</td>
                  <td>{place}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HeroList;
