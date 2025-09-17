import { useState, useEffect } from 'react';

const DataFetchButton = () => {
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (userId != null) {
      fetchUser(userId);
    }
  }, [userId]);

  async function fetchUser(id) {
    try {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {console.log('render')}
      <h2>Data Fetch From API</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', padding: '20px' }}>
        <button onClick={() => setUserId(1)} style={{ textAlign: 'center', padding: '10px 20px', backgroundColor: '#e0f7fa' }}>
          USER1
        </button>
        <button onClick={() => setUserId(2)} style={{ textAlign: 'center', padding: '10px 20px', backgroundColor: '#ffe0b2' }}>
          USER2
        </button>
        <button onClick={() => setUserId(3)} style={{ textAlign: 'center', padding: '10px 20px', backgroundColor: '#f8bbd0' }}>
          USER3
        </button>
        <button onClick={() => setUserId(4)} style={{ textAlign: 'center', padding: '10px 20px', backgroundColor: '#dcedc8' }}>
          USER4
        </button>
        <button onClick={() => setUserId(5)} style={{ textAlign: 'center', padding: '10px 20px', backgroundColor: '#c5cae9' }}>
          USER5
        </button>
        <button onClick={() => setUserId(6)} style={{ textAlign: 'center', padding: '10px 20px', backgroundColor: '#ffccbc' }}>
          USER6
        </button>
        <button onClick={() => setUserId(7)} style={{ textAlign: 'center', padding: '10px 20px', backgroundColor: '#d1c4e9' }}>
          USER7
        </button>
        <button onClick={() => setUserId(8)} style={{ textAlign: 'center', padding: '10px 20px', backgroundColor: '#b2dfdb' }}>
          USER8
        </button>
        <button onClick={() => setUserId(9)} style={{ textAlign: 'center', padding: '10px 20px', backgroundColor: '#f0f4c3' }}>
          USER9
        </button>
        <button onClick={() => setUserId(10)} style={{ textAlign: 'center', padding: '10px 20px', backgroundColor: '#ffcdd2' }}>
          USER10
        </button>
      </div>

      <h2>{users?.name}</h2>
    </>
  );
};

export default DataFetchButton;
