import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  let [tasks, setTasks] = useState(TASKS)
  
  function onDelete(taskText){
    //console.log(taskText)
    let filteredTask = tasks.filter(task => task.text !== taskText)
    //console.log(filteredTask)
    setTasks(filteredTask)
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasksProp={tasks} categories={CATEGORIES} onDelete={onDelete}/>
    </div>
  );
}

export default App;
