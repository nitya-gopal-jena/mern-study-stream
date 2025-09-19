import { useReducer } from 'react';
import NumberReducer from '../reducers/NumberReducer';
import '../css/reducer.css';

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(NumberReducer, 0);

  return (
    <>
      <div className='container'>
        <h1>UseReducer() Hook</h1>
        <h2>Number = {state}</h2>
        <div className='button-group'>
          <button onClick={() => dispatch({ type: 'inc', payload: 1 })}  className='btn-inc'>Increment</button>
          <button onClick={() => dispatch({ type: 'dec', payload: 1 })} className='btn-dec'>Decrement</button>

          <button onClick={() => dispatch({ type: 'inc', payload: 10 })} className='btn-inc'>Increment 10</button>
          <button onClick={() => dispatch({ type: 'dec', payload: 10 })} className='btn-dec'>Decrement 10</button>
        </div>
      </div>
    </>
  );
};

export default UseReducerHook;
