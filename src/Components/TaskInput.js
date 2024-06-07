import React, { useState } from 'react'
import "../Components/TaskInput.css";
import DisplayTask from './DisplayTask';
import { useDispatch } from 'react-redux';
import { addTask } from '../Store/Slices/TaskSlice';

const TaskInput = () => {
    const [taskData , setTaskData] = useState("");
    const dispatch = useDispatch();

    const handleInput=(e)=>{
        setTaskData(e.target.value)
    }

    const addTasks = ()=>{
        if(taskData){
            console.log(taskData)
            dispatch(addTask(taskData))
            setTaskData("")
        }else{
            console.log("no task")
        }
    }

    return (
        <div>
            <div className='inputmain'>
                <input
                    className='input_bar'
                    placeholder='Enter the Task'
                    value={taskData}
                    onChange={handleInput}
                />
                <button className='add_btn' onClick={addTasks}>Add Task</button>
            </div>
            <DisplayTask/>
        </div>
    )
}

export default TaskInput 