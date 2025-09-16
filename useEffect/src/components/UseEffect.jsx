
import { useState, useEffect } from 'react';
const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log('1st useEffect()');
  });

//   useEffect(() => {
//     console.log('2nd useEffect()');
//   }, []);

//   useEffect(() => {
//     if (count1 == 15) {
//       setCount1(100);
//     }
//     console.log('3rd useEffect()');
//   }, [count1]);

//   useEffect(() => {
//     console.log('4th useEffect()');
//     return () => {
//       console.log('returned function');
//     };
//   });

  return (
    <>
      {console.log('render')}
      <h1>useEffect() hook</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h1>{count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Increment Count1</button>
    </>
  );
};

export default UseEffect;
