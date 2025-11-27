import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className='col-3 p-3'>
        <div className='card mt-4 shadow-sm'>
          <img src={props.imgName} className='card-img-top' alt='GTA cover' />
        </div>
      </div>
    </>
  );
};

export default Card;
