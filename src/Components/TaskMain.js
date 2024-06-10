import React from 'react'
import TaskInput from './TaskInput'
import FilterTask from './FilterTask'
import "../Components/Taskmain.css"

const TaskMain = () => {
  return (
    <div className='taskmain'>
        {/* <h1>TODO</h1> */}
        <FilterTask/>
        <TaskInput/>
    </div>
  )
}

export default TaskMain