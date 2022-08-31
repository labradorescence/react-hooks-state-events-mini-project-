import React from "react";

function TaskList(props) {
  let eachTasks = props.tasks.map(eachTask => {
   //return console.log(eachTask.text)
    return eachTask.text
  })
 return (
  <>
    <h1>{eachTasks}</h1>
    
  </>
 
)}

export default TaskList;
