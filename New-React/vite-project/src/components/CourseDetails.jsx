import React from 'react';
import Course from './Course';

export const CourseDetails = () => {
  let MERN = { frontend: 'ReactJS', backend: 'NodeJS', server: 'ExpressJS', database: 'MONGODB' };
  return (
    <>
      <main className='container-fluid'>
        <div className='row'>
          <Course courseName={MERN} />
        </div>
      </main>
    </>
  );
};

export default CourseDetails;
