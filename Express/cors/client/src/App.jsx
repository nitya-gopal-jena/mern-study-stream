import React from 'react';
import { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function makeApiCall() {
      try {
        let response = await fetch('http://localhost:5000');
        let data = await response.json();
        setUsers(data);
      } catch (error) {
        setUsers([{ name: 'There is a problem while fetching' }]);
      }
    }
    makeApiCall()
  },[]);

  return (
    <>
    
      <h1>This is Users Page</h1>

      {
        users.map((u, i) => {
          return <h2 key={i}>{ u.name}</h2>
        })
      }
    
    </>
  )
};

export default App;
