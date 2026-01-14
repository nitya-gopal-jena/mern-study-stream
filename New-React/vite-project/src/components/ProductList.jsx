import React, { useState } from 'react';

let data = [
  {
    id: 101,
    
    name: 'Biriyani',
    price: 299,
    rating: 4.5,
    imgUrl: '',
    qty: 1,
  },
  {
    id: 102,
    name: 'Chicken Kabab',
    price: 150,
    imgUrl: '',
    rating: 4.5,
    qty: 1,
  },
  {
    id: 103,
    name: 'Lemon Chicken',
    price: 299,
    rating: 4.5,
    imgUrl: '',
    qty: 1,
  },
];

let ProductList = () => {
  let [items, setItems] = useState(data);

  function handleInc(id) {
    console.log('hii');
    console.log(items);

    setItems(items.map((itm) => (itm.id === id ? { ...itm, qty: itm.qty + 1 } : itm)));
    console.log(items);
  }

  function handleDec(id) {
    const updatedArr = items.map((item) => {
      return item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item;
    });
    setItems(updatedArr);
  }

  return (
    <>
      <section className='container mt-4'>
        <table className='table text-center table-bordered '>
          <thead>
            <tr>
              <th className='bg-warning'>Id</th>
              <th className='bg-warning'>Name</th>
              <th className='bg-warning'>Image</th>
              <th className='bg-warning'>Rating</th>
              <th className='bg-warning'>Quantity</th>
              <th className='bg-warning'>Price</th>
            </tr>
          </thead>

          <tbody>
            {items.map((product) => {
              let { id, name, imgUrl, rating, qty ,price} = product;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{imgUrl ? <img src={imgUrl} alt={name} width='50' /> : 'No Image'}</td>
                  <td>{rating}</td>
                  <td>
                    <span onClick={() => handleDec(id)} style={{ cursor: 'pointer' }}>
                      <i className='fa fa-minus-circle'></i>
                    </span>
                    {qty}
                    <span onClick={() => handleInc(id)} style={{ cursor: 'pointer' }}>
                      <i className='fa fa-plus-circle'></i>
                    </span>
                  </td>
                  <td>₹{price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ProductList;
