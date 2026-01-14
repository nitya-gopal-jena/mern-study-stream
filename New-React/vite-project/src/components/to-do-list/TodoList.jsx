import React from 'react';

const TodoList = () => {
  return (
    <>
      <section className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-3 mt-4 m-auto'>
            <ul>
              <li className='input-group'>
                <input type='checkbox'  />
                <h6 className='ms-2'>Practice Everyday</h6>
                <span style={{float:'right'}}>❌</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoList;
