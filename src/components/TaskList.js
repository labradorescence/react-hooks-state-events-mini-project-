import React from "react";
import Task from "./Task.js"

function TaskList({tasks, handleRemoveTask}) {

  const removeTask = (text) => {
    // console.log("removing a task in set tasks area")
    handleRemoveTask(text)
  }

  const task = tasks.map((eachTask, idx) => (
    <Task 
      text = {eachTask.text}
      category = {eachTask.category}
      key = {idx}
      removeTaskProp = {removeTask}
    />
  ))

  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;