import React from "react";

function Task({text, category, removeTaskProp}) {
  const removeTask = () => {
    console.log("removing a task")
    removeTaskProp(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={removeTask}>X</button>
    </div>
  );
}

export default Task;
