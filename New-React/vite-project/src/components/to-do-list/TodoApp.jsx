import { useState } from 'react';

const TodoApp = () => {
  let [taskInput, setTaskInput] = useState('');
  let [tasks, setTask] = useState([]);
  let [updateTask, setUpdateTask] = useState('');

  function addtask() {
    if (taskInput !== '') {
      let newTask = { id: tasks.length + 1, name: taskInput, checkBox: false };
      setTask((tsk) => [...tsk, newTask]);
      setTaskInput('');
    }
  }

  function handleChange(e) {
    setTaskInput(e.target.value);
  }

  function handleCheckBox(id) {
    setTask(tasks.map((tsk) => (tsk.id == id ? { ...tsk, checkBox: !tsk.checkBox } : tsk)));
  }

  function handleDelete(id) {
    setTask(tasks.filter((tsk) => tsk.id !== id));
  }

  function handleUpdate(id) {
    setUpdateTask(id);
    setTaskInput(taskInput.find((tsk) => (tsk.id == updateTask.id ? { ...tsk, tsk: newTask.task } : tsk)));
  }

  return (
    <>
      <section className='container-fluid mt-4 '>
        <div className='row '>
          <div className='col-3 m-4 m-auto'>
            <div className='input-group'>
              <input type='text' placeholder='Enter the task' value={taskInput} onChange={handleChange} />
              <button className='btn btn-success' onClick={addtask}>
                Add Task
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-3 mt-4 m-auto'>
            <ul>
              {tasks.map((task) => {
                return (
                  <li className='input-group' key={task.id}>
                    <input type='checkbox' checked={task.checkBox} onChange={() => handleCheckBox(task.id)} />
                    <h6 className='ms-2'>{task.name}</h6>
                    <span style={{ float: 'right', marginRight: '20px', marginLeft: '40px', cursor: 'pointer' }} onClick={() => handleUpdate(task.id)}>
                      🖋️
                    </span>
                    <span style={{ float: 'right', cursor: 'pointer' }} onClick={() => handleDelete(task.id)}>
                      ❌
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoApp;
