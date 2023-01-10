import React, {useState} from "react";
import Task from "./Task.js"

function TaskList({TASKS}) {

  const [ tasks, setTasks ] = useState(TASKS)

  const removeTask = (text) => {
    // console.log("removing a task in set tasks area")
    setTasks(tasks.filter(eachTask => eachTask.text !== text))
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