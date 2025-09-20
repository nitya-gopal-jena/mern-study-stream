import { useMemo, useState } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('blue');

  function setNumber() {
      console.log('SetNumber function');
    for (let i = 0; i <= 100000000; i++) {}

    return count * 10;
  }

  let getNumber = useMemo(setNumber, [count]);

  return (
    <>
      {console.log('render')}
      <h1>useMemo() hook</h1>
      <div style={{ height: '200px', width: '200px', background: color, boxShadow: '0 0 4px black' }}></div>
      <button onClick={() => setColor(color == "blue" ? "red" : "blue")}>Change Color</button>

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Change Count</button>
      <h1>My Number: {getNumber}</h1>
    </>
  );
};

export default UseMemo;
