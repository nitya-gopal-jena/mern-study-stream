import { useEffect, useState } from 'react';

const DataFetch = () => {
  let [users, setUsers] = useState([]);
  let [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.log(error));
    }
  }, [buttonClicked]);

  return (
    <>
      {console.log('render')}
      <h2>Data Fetch From API</h2>

      <button onClick={() => setButtonClicked(true)}>Fetch Data</button>
      <ul>
        {users.map((ele) => (
          <li key={ele.id}>{ele.name}</li>
        ))}
      </ul>
    </>
  );
};

export default DataFetch;
