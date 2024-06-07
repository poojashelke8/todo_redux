import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../Store/Slices/TaskSlice'

const DisplayTask = () => {

    const task = useSelector((state)=>state.tasks)
    const dispatch = useDispatch()

    const handleTask = (id)=>{
        dispatch(deleteTask(id))
    }
  return (
    <div>
        {task.map((task,id)=>(
            <li key={id}>
                {task} <button onClick={()=>handleTask(id)}>Delete</button>
            </li>
        ))
        }
    </div>
  )
}

export default DisplayTask