import './TodoList.css';
import { useState } from 'react';

const TodoList = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Add the tasks
  function handleAdd() {
    if (editIndex !== null) {
      todos[editIndex] = text;
      setTodos([...todos]);
      setEditIndex(null);
    } else {
      setTodos([...todos, text]);
    }
    setText('');
  }

  // Delete the tasks

  function deleteTasks(deleteIndex) {
    todos.splice(deleteIndex);
    setTodos([...todos]);
  }

  // Edit the tasks

  function editTask(index) {
    setText(todos[index]);
    setEditIndex(index);
  }

  return (
    <>
      <div className='container'>
        <div className='to-do-items'>
          <input type='text' placeholder='Enter your tasks' className='input-field' value={text} onChange={(e) => setText(e.target.value)} />
          <button type='submit' className='btn' onClick={handleAdd}>
            {editIndex == null ? "Add" : "Update"}
          </button>
        </div>

        <div className='display-tasks-container'>
          {todos.map((task, index) => (
            <div key={index} className='task-row'>
              <textarea  className='tasks-display' value={task}  />
              <button className='delete-btn' onClick={() => deleteTasks(index)}>
                Delete
              </button>

              <button className='edit-btn' onClick={(e) => editTask(index)}>
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
