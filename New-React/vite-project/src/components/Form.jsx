import React, { useState } from 'react';

const Form = () => {
  let [user, setUser] = useState('');
  let [pass, setPass] = useState('');

  function handleChangeUs(e) {
    setUser(e.target.value);
  }

  function handleChangePass(e) {
    setPass(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let user1 = { user, pass };
    console.log(user1);
    setUser('');
    setPass('');
  }

  return (
    <>
      <section className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-3 m-auto mb-5'>
            <div className='card'>
              <div className='card-header bg-warning text-center'>
                <h2>Register Here </h2>
              </div>
              <div className='card-body'>
                <form onSubmit={handleSubmit}>
                  <div>
                    <div>
                      <input type='text' placeholder='Username' value={user} onChange={handleChangeUs} className='form-control mt-2' />
                    </div>

                     <div>
                      <input type='email' placeholder='Email' value={pass} onChange={handleChangePass} className='form-control mt-2' />
                    </div>


                    <div>
                      <input type='password' placeholder='Password' value={pass} onChange={handleChangePass} className='form-control mt-2' />
                    </div>

                     <div>
                         <label>Select City </label><br />
                         <select>
                          <option>Bengaluru</option>
                          <option>Balasore</option>
                          <option>Chennai</option>
                         </select>                
                    </div>

                     <div> 
                      <input type='checkbox' className='mt-3' /> Terms and condition
                    </div>


                    <button className='btn btn-success  mt-2' style={{width:'100%', padding:'8px'}}>submit </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
