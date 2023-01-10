import React from "react";

function Task({taskText, category, onDelete}) {

  function deleteTask(){
    onDelete(taskText)
  }
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{taskText}</div>
      <button className="delete" onClick={deleteTask}>X</button>
    </div>
  );
}

export default Task;
