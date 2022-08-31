import React from 'react'

export default function TaskList(props) {
  return (
    <div>
      {props.tasks.map((eachTask, i) => {
        return(
          <div className="tasks" key={i}>
           {eachTask.text}
          </div>
          )
      })}
    </div>
  )
}
