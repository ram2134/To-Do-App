import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = (id) => {
    const newList = tasks.filter((task) => task.id !== id);
    setTasks(newList);
  };

  const toggleCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={() => addTask(text)}>Add</button>
      <div className="List">
        <ul>
          {tasks.map((task) => {
            const { id, text, completed } = task;
            return (
              <li key={id} className={completed ? "completed" : ""}>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => toggleCompleted(id)}
                />
                <span>{text}</span>
                <button onClick={() => deleteTask(id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
