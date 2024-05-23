import React, { useState } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function addTask() {
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      
      <input type="text" value={newTask} onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}