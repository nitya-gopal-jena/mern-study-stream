import React from 'react'

const CounterApp = () => {
  return (
      <>
      
          <div className="row">
              <div className="col-md-6 m-auto mt-4">
                  <div className="card">
                      <div className="card-header bg-dark text-white text-center">
                          <h2>Counter App Using Redux</h2>
                      </div>

                      <div className="card-body text-center">
                          <h3>Counter: </h3>
                          <button className='btn btn-success me-2'>+1</button>
                          <button className='btn btn-warning'>-1</button>
                      </div>
                  </div>
              </div>
          </div>
          
      </>
  )
}

export default CounterApp