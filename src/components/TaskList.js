import React from "react";
import Task from "./Task"

function TaskList({tasks, removeTask}) {

  const task = tasks.map((task, idx) => (
    <Task 
      category = {task.category}
      text = {task.text}
      removeTask = {removeTask}
      key = {idx}
    />
  ))

  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;