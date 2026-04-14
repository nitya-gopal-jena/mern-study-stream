import React from 'react';

const App = () => {
  let fruits = ['Apple', 'mango', 'Banana', 'Orange'];

  return (
    <>
      <section>
        <div>
          {fruits.map((fruit, i) => (
            <h2 key={i}>{fruit}</h2>
          ))}
        </div>
      </section>
    </>
  );
};

export default App;
