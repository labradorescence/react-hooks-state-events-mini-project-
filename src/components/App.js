import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [ tasks, setTasks ] = useState(TASKS)
  const [ selectedCategory, setSelectedCategory ] = useState("All")

  const removeTask = (taskToDelText) => {
    setTasks(tasks.filter(task=> task.text !== taskToDelText))
  }

  const handleSelectedCat = (selectedCat) => {
    setSelectedCategory(selectedCat)
  }

  const tasksToDisplay = tasks.filter(task => {
    if(selectedCategory === "All") return true
    return task.category === selectedCategory
  })

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory = {selectedCategory}
        handleSelectedCat = {handleSelectedCat}
      />
      <NewTaskForm 
        categories = {CATEGORIES.filter((cat) => cat !== "All")}
        onTaskFormSubmit = {addNewTask}
      />
      <TaskList 
        tasks = {tasksToDisplay}
        removeTask = {removeTask}
      />
    </div>
  );
}

export default App;