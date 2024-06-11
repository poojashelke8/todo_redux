import React from 'react'
import "../Components/DisplayTask.css"
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../Store/Slices/TaskSlice'

const DisplayTask = () => {

    const task = useSelector((state)=>state.tasks)
    const dispatch = useDispatch()

    const handleTask = (id)=>{
        dispatch(deleteTask(id))
    }
  return (
    <div className='display_task'>
        {task.map((task,id)=>(
            <li key={id} className='task'>
                {task} <button className="delete_btn" onClick={()=>handleTask(id)}>Delete</button>
            </li>
        ))
        }
    </div>
  )
}

export default DisplayTask