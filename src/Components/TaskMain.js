import React from 'react'
import TaskInput from './TaskInput'
import FilterTask from './FilterTask'
import "../Components/Taskmain.css"

const TaskMain = () => {
  return (
    <div className='taskmain'>
        <FilterTask/>
        <TaskInput/>
    </div>
  )
}

export default TaskMain