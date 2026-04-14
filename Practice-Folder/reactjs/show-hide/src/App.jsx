import { useState } from 'react';

const App = () => {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay((prev) => !prev);
  }

  return (
    <>
      <section>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '80px auto' }}>
          <button onClick={handleDisplay} style={{ width: '150px', padding: '12px' }}>
            {display ? 'Hide' : 'Show'}
          </button>
        </div>

        {display && (
          <h3 style={{ textAlign: 'center' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat modi dolore similique pariatur quia, nobis labore asperiores recusandae quisquam dicta.
          </h3>
        )}
      </section>
    </>
  );
};

export default App;
