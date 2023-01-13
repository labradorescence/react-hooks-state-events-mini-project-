import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  function onDelete(taskText){
    //console.log(taskText)
    let filteredTask = tasks.filter(task => task.text !== taskText)
    //console.log(filteredTask)
    setTasks(filteredTask)
  }

  const handleSelectedCategory = (text) => {
    setSelectedCategory(text)
  }

  const handleSubmit = (newTask) => {
      setTasks([...tasks, newTask])
  }

  const taskToDisplay = tasks.filter((task) => {
    if(selectedCategory === "All") return true
    return task.category === selectedCategory
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
          <CategoryFilter 
            categories={CATEGORIES}
            selectedCategory = {selectedCategory}
            handleSelectedCategory = {handleSelectedCategory}
            />
          <NewTaskForm 
            categories={CATEGORIES.filter((category) => category !== "All")}
            onTaskFormSubmit={handleSubmit} 
            />
          <TaskList 
            tasksProp={taskToDisplay} 
            categories={CATEGORIES} 
            onDelete={onDelete}/>
    </div>
  );
}

export default App;
