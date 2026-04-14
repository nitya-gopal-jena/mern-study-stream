import { useState, useEffect } from 'react';

const ApiHandler = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log('Users not fetch', err));
  }, []);

  return (
    <section className='main-container'>
      <div className='user-details'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ApiHandler;
