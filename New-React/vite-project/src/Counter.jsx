import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <section className='container-fluid'>
        <h2>Counter </h2>
        <h3> Counter :{count} </h3>
        <button className='btn btn-success  text-center' onClick={handleClick}>Click </button>
      </section>
    </>
  );
};

export default Counter;
