import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [ category, setCategory ] = useState("All")
  const [ tasks, setTasks ] = useState(TASKS)

  const handleCategory = (c) => {
    setCategory(c)
  }

  const tasksToDisplay = tasks.filter(task => {
    if(category === "All") return true
    return task.category === category
  })

  const handleRemoveTask = (text) => {
    setTasks(tasks.filter(eachTask => eachTask.text !== text))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
            categories = {CATEGORIES} 
            selectedCategory = {category} 
            handleSelectedCategory= {handleCategory} />
      <NewTaskForm />
      <TaskList 
            tasks = {tasksToDisplay}
            handleRemoveTask={handleRemoveTask}/>
    </div>
  );
}

export default App;
