import React, { useEffect, useState } from 'react';
import Add from './Add';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState(null);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(error => console.error('Error fetching todos:', error));
  };

  const handleDone = (id) => {
    axios.put(`http://localhost:3001/update/${id}`)
      .then(() => getdata())
      .catch(error => console.error('Error updating todo:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(() => getdata())
      .catch(error => console.error('Error deleting todo:', error));
  };

  const handleEdit = (todo) => {
    setSelectedEdit(todo);
    setIsEdit(true);
  };

  return (
    <div className='home'>
      <h2>Todo List</h2>
      <Add
        isEdit={isEdit}
        getdata={getdata}
        selectedEdit={selectedEdit}
        setIsEdit={setIsEdit}
      />
      <br />
      {todos.length === 0 ? (
        <div><h2>No Record</h2></div>
      ) : (
        todos.map(todo => (
          <div key={todo._id} className='task'>
            <div className='checkbox' onClick={() => handleDone(todo._id)}>
              {todo.done ?
                <BsFillCheckCircleFill className='icon' />
                :
                <BsCircleFill className='icon' />
              }
              <div className='eventname'>{todo.task}</div>
            </div>
            <div>
              <span>
                <BsFillPencilFill className='icon' onClick={() => handleEdit(todo)} />
              </span>
              <span>
                <BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
