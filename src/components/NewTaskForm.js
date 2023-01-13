import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  // controlled form using react hook useState
  // 1. Creating a state/ setter function
  // 2. Derive Value of Input from state
  // 3. Handle the `onChange` event


  const [ category, setCategory ] = useState("Code")
  const [ text, setText ] = useState("") //In a controlled form, State determines the “input” values. 

  const selectNewCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleInput = (e) => {
    setText(e.target.value)
  }
  //How is form state updated when handling React forms?
  // When `onChange` events take place, the appropriate state setter functions are invoked, updating state/ re-rendering our component.

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
          name="text" 
          value={text}  //corresponds with state var value
          onChange={handleInput}/>
      </label>
      <label>
        Category
        <select 
            name="category" 
            value={category} //corresponds with state var value
            onChange={selectNewCategory}>
                {categories.map((category) => <option key={category} >{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


// ///////////////////////////////////////////////////////
// What does it mean when a component is controlled?
// ///////////////////////////////////////////////////////

// Controlled: Aligning / deriving the value of an input with / from state. 

// Uncontrolled: input value is saved in DOM document object model not in the react state. (using useRef)

// /////////////////////////////////////////////////////////
// In a controlled form, what determines the input values?
// /////////////////////////////////////////////////////////

// State determines the “input” values. 

// /////////////////////////////////////////////////////////
// How is form state updated when handling React forms?
// /////////////////////////////////////////////////////////
// When `onChange` events take place, the appropriate state setter functions are invoked, updating state/ re-rendering our component.

// /////////////////////////////////////////////////////////
// Identify the three pieces necessary to make a controlled form:
// /////////////////////////////////////////////////////////
// Creating a state/ setter function
// Derive Value of Input from state
// Handle the `onChange` event

// /////////////////////////////////////////////////////////
// What attribute on an input field corresponds with a state variable?
// /////////////////////////////////////////////////////////
// Value attribute

// /////////////////////////////////////////////////////////
// What should the attribute ‘name’ on an input field correspond with?
// /////////////////////////////////////////////////////////
// Should correspond with the appropriate “key” in our state object.

