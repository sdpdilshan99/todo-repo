import React, { useState } from 'react'
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';


const Add = ({getdata}) => {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios.post("http://localhost:3001/add", {task: task})
      .then(result => {getdata();
        toast.success("Task Added Successfully")
      })
      .catch(error => {
        toast.error("Task Added Failed")
      }
      
    )
  }
  
  return (
    <div>
        <input 
          className='input' 
          type="text" 
          placeholder='Enter Task'
          onChange={ (e) => setTask(e.target.value)}
          />

        <button 
          className='button'
          type="button"
          onClick={handleAdd}
        >
          Add
        </button>
        <ToastContainer position="bottom-right"/>
    </div>
  )
}

export default Add