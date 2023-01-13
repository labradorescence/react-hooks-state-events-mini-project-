import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [ category, setCategory ] = useState("Code")
  const [ text, setText ] = useState("")

  const selectNewCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleInput = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit({text, category})
    setText("")
    setCategory("All")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          value={text} 
          name="text" 
          onChange={handleInput}/>
      </label>
      <label>
        Category
        <select 
            name="category" 
            value={category} 
            onChange={selectNewCategory}>
                {categories.map((eachC, idx) => <option key={idx} >{eachC}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;