import React from 'react'
import Task from "./Task"

export default function TaskList({tasksProp, onDelete}) {
  return (
    <div className="tasks" >
      {tasksProp.map(eachTask => {
        return <Task 
                    key={eachTask.text}
    
                    taskText={eachTask.text} 
                    category={eachTask.category}

                    onDelete={onDelete}
                />
        })}
    </div>
  )
}
