import React from 'react';

const Cart = ({ Cart }) => {
  return <>{Cart.length > 0 ? <></> : <h2 className='text-danger text-center' style={{marginTop:'80px'}}>Your cart is emptyy!!! add items...</h2>}</>;
};

export default Cart;
