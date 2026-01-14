import React, { useState } from 'react';
import gta from './../assets/gta.jpg';

let Product = () => {
  let [product, setProduct] = useState({
    id: 101,
    name: 'Biriyani',
    price: 299,
    rating: 4.5,
    qty: 1,
  });

  let { name, price, rating, qty } = product;

  function handleInc() {
    setProduct((obj) => ({ ...obj, qty: obj.qty + 1 }));
  }

  function handleDec() {
    setProduct((obj) => ({ ...obj, qty: obj.qty - 1 }));
  }

  return (
    <>
      <section className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-3 m-auto mb-4'>
            <div className='card '>
              <div className='card-header'>
                <img src={gta} alt='' />
              </div>
              <div className='card-body'>
                <h2>Name: {name} </h2>
                <h3>Price: {price} </h3>
                <h3>Rating: {rating} </h3>

                <button className='btn btn-warning' onClick={handleDec}>
                  {' '}
                  Dec{' '}
                </button>
                <span>{qty}</span>
                <button className='btn btn-warning' onClick={handleInc}>
                  Inc
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
