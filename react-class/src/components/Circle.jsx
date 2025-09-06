import '../css/circle.css';
import { useState } from 'react';

const Circle = () => {
  const [circles, setCircles] = useState([]);
  const [selectedCircle, setSelectedCircle] = useState(null);

  // Create Circle
  const handleCircle = () => {
    const newId = circles.length ? circles[circles.length - 1].id + 1 : 1;
    setCircles([...circles, { id: newId }]);
  };

  // Deleted selected Circle
  const handleDelete = () => {
    if (selectedCircle != null) {
      setCircles(circles.filter((circle) => circle.id !== selectedCircle));
      setSelectedCircle(null);
    }
  };
  return (
    <>
      <div className='circle'>
        <div className='btn'>
          <button className='create-circle' onClick={handleCircle}>
            Create Circle
          </button>
          <button className='delete-circle' onClick={handleDelete} disabled={selectedCircle === null}>
            Delete Circle
          </button>
        </div>

        <div className='text'>
          <h2>Circle Create: {circles.length}</h2>
          <h2>Circle Select: {selectedCircle ? selectedCircle : 'None'} </h2>
        </div>

        <div className='display-circle'>
          {circles.map((circle) => (
            <div key={circle.id} onClick={() => setSelectedCircle(circle.id)} className={`circle-item ${selectedCircle === circle.id ? 'active' : ''}`}>
              {circle.id}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Circle;
