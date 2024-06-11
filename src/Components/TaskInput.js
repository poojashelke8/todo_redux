import React, { useState } from 'react'
import "../Components/TaskInput.css";
import DisplayTask from './DisplayTask';
import { useDispatch } from 'react-redux';
import { addTask } from '../Store/Slices/TaskSlice';
// import Dropdown from './DropDown';

const TaskInput = () => {
    const [taskData, setTaskData] = useState("");
//     const [selectedOption, setSelectedOption] = useState('');

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

    const dispatch = useDispatch();

    const handleInput = (e) => {
        setTaskData(e.target.value)
    }

    const addTasks = () => {
        if (taskData) {
            console.log(taskData)
            dispatch(addTask(taskData))
            setTaskData("")
        } else {
            console.log("no task")
        }
    }

    return (
        <>
            <div className='taskinput'>
                <div className='inputmain'>
                    <input
                        className='input_bar'
                        placeholder='Enter the Task'
                        value={taskData}
                        onChange={handleInput}
                    />
                    {/* <Dropdown /> */}
                    {/* <select id="options" value={selectedOption} onChange={handleChange}>
                        <option value="">Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select> */}
                    <button className='add_btn' onClick={addTasks}>Add Task</button>
                </div>
                {/* <DisplayTask/> */}
                <div className='displaytask'>
                    <DisplayTask />
                </div>
            </div>

        </>
    )
}

export default TaskInput 