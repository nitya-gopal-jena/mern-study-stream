
import { useContext } from 'react';
import { myContext } from './Child3';


const Child2 = () => {
  let data = useContext(myContext);
  return (
    <>
      <h1>Child2 Component</h1>
      <h2>{data}</h2>
    </>
  );
};

export default Child2;
