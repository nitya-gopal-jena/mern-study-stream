import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    console.log('Email', email);
    console.log('Password', password);
    navigate('/', { state: { email } });
  };

  return (
    <>
      <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <div className='email-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='password-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
