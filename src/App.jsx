import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";  

function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const totalTasks = task.length;
  const completedTasks = task.filter((t) => t.checked).length;

  function Inputtask(event) {
    setInputValue(event.target.value);
  }

  function addTask() {
    if (inputValue.trim()) {
      setTask([...task, { text: inputValue, checked: false }]);
      setInputValue("");
    }
  }

  function check(index) {
    const updatedTask = task.map((t, idx) =>
      idx === index ? { ...t, checked: !t.checked } : t
    );
    setTask(updatedTask);
  }

  function deleteTask(index) {
    const updatedTask = task.filter((_, idx) => idx !== index);
    setTask(updatedTask);
  }

  return (
    <div className="container p-5">
      {/* عنوان الصفحة */}
      <h1 className="text-center text-primary mb-4">Task Tracker</h1>

      {/* عداد المهام */}
      <div className="card mb-4 shadow-lg">
        <div className="card-body">
          <h5 className="card-title text-dark">Tasks Progress</h5>
          <p className="card-text text-muted">Keep up the great work!</p>
          <h3 className="text-info">
            {completedTasks} / {totalTasks}
          </h3>
        </div>
      </div>

       <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your task"
          value={inputValue}
          onChange={Inputtask}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* قائمة المهام */}
      <ul className="list-group">
        {task.map((t, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center rounded-3 ${
              t.checked ? "bg-success text-white" : "bg-light"
            } mb-2`}
          >
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className="form-check-input me-3"
                checked={t.checked}
                onChange={() => check(index)}
              />
              <span
                style={{
                  textDecoration: t.checked ? "line-through" : "none",
                  color: t.checked ? "#6c757d" : "#000",
                }}
              >
                {t.text}
              </span>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(index)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
