import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [ tasks, setTasks ] = useState(TASKS)
  const [ selectedCategory, setSelectedCategory ] = useState("All")
 
  const removeTask = (taskToDeleteText) => {
    setTasks(tasks.filter(task => task.text !== taskToDeleteText))
  }

  const handleSelectedCate = (SelectedCate) => {
    setSelectedCategory(SelectedCate)
  }

  const tasksToDisplay = tasks.filter(task => {
    if(selectedCategory === "All") return task
    return task.category === selectedCategory
  })

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask]) //obj
  }

 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories = {CATEGORIES}
        handleSelectedCate = {handleSelectedCate}
        selectedCategory = {selectedCategory}
        />
      <NewTaskForm 
        categories ={CATEGORIES.filter((cat) => cat !=="All")}
        onTaskFormSubmit = {addNewTask}/>
      <TaskList 
        tasks={tasksToDisplay}
        removeTask = {removeTask}/>
    </div>
  );
}

export default App;
