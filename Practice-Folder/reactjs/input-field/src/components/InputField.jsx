import { useState } from 'react';

const InputField = () => {
  const [form, setForm] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <section className='main-container'>
        <form onSubmit={handleSubmit}>
          <input type='text' name='username' placeholder='Enter username' onChange={handleChange} />
          <input type='password' name='password' placeholder='Enter password' onChange={handleChange} />
          <button className='submit-btn'>Submit</button>
        </form>
      </section>
    </>
  );
};

export default InputField;
