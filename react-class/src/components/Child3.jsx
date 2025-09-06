import React from 'react';
import { createContext } from 'react';

export let myContext = createContext();

export const Child3 = (props) => {
  return (
    <>
      <myContext.Provider value={'Hello'}>{props.children}</myContext.Provider>
    </>
  );
};
