import { useCallback, useState } from 'react';
import UseCallbackChild from './UseCallbackChild';

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('blue');

  let setNumber = useCallback(() => {
    return count * 10;
  }, [count]);

  return (
    <>
      {console.log('render')}
      <h1>useMemo() hook</h1>
      <div style={{ height: '200px', width: '200px', background: color, boxShadow: '0 0 4px black' }}></div>
      <button onClick={() => setColor(color == 'blue' ? 'red' : 'blue')}>Change Color</button>

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Change Count</button>
      <UseCallbackChild setNumber={setNumber} />
    </>
  );
};

export default UseCallback;
