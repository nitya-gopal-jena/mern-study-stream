import React from 'react';

const Course = ({ courseName }) => {
  let { frontend, backend, server, database } = courseName;
  return (
    <>
      <div className='col-4 p-3'>
        <div className='card mt-4 shadow-sm p-4'>
          <h3>FrontEnd: {frontend}</h3>
          <h3>BackEnd: {backend}</h3>
          <h3>Server: {server}</h3>
          <h3>Database: {database}</h3>
        </div>
      </div>
    </>
  );
};

export default Course;
