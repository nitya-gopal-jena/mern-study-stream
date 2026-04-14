import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  function incCount() {
    setCount(count + 1);
  }
  function decCount() {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <section className='main-container' style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <div className='counter-box' style={{ margin: '100px auto', border: '2px solid black', padding: '20px' }}>
          <h3 style={{ textAlign: 'center' }}>Count:{count} </h3>
          <button className='inc-btn' onClick={incCount} style={{ width: '120px', padding: '12px' }}>
            INC
          </button>
          <button className='dec-btn' onClick={decCount} style={{ width: '120px', padding: '12px', marginLeft: '10px' }}>
            DEC
          </button>
        </div>
      </section>
    </>
  );
};

export default Counter;
