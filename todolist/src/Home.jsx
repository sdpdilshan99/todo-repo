import React, { useEffect, useState } from 'react'
import Add from './Add'
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

const Home = () => {
  const [todos, setTodos] =useState([])
  
  useEffect( () => {
    getdata();
  }, []);

  const getdata = () => {
    axios.get("http://localhost:3001/get")
      .then(result => setTodos(result.data))
      .catch(error => console.log(error))
  }

  const handleDone = (id) => {
    axios.put("http://localhost:3001/update/"+id)
      .then(result => {getdata(result);})
      .catch(error => console.log(error))
  }

  const handleEdit = (id) => {
    axios.put("http://localhost:3001/edit/"+id)
      .then(result => {location.reload(result)})
      .catch(error => console.log(error))
  }

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/delete/"+id)
      .then(result => {getdata(result);})
      .catch(error => console.log(error))
  }
  
  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Add
          getdata = {getdata}
        />
        <br/>
        {
          todos.length === 0
          ?
          <div><h2>No Record</h2></div>
          :
          todos.map(todo => (
            
            <div className='task'>
              <div className='checkbox' onClick={ () => handleDone(todo._id)}>
                {todo.done ? 
                  <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                  :
                  <BsCircleFill className="icon"/>
                }
                <div className='eventname'>{todo.task}</div>
              </div>
              <div> 
                <span><BsFillPencilFill className="icon" onClick={ () => handleEdit(todo._id)}/></span>
                <span><BsFillTrashFill className="icon" onClick={ () => handleDelete(todo._id)}/></span>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Home