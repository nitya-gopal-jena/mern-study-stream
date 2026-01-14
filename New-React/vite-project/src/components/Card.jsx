import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className='col-3 p-3'>
        <div className='card mt-4 shadow-sm'>
          <div className='card-header'>
            <img src={props.imgName} className='card-img-top' alt='GTA cover' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
