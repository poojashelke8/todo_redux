import React from 'react'
import TaskInput from './TaskInput'
import FilterTask from './FilterTask'
import "../Components/Taskmain.css"

const TaskMain = () => {
  return (
    <div className='main'>
    <h1 id='taskheading'>todo.</h1>
    <div className='taskmain1'>
        {/* <FilterTask/> */}
        <TaskInput/>
    </div>
    </div>
  )
}

export default TaskMain