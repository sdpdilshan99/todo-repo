import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const Add = ({ getdata, isEdit, selectedEdit, setIsEdit }) => {
  const [task, setTask] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (isEdit && selectedEdit) {
      setTask(selectedEdit.task || '');
      setDone(selectedEdit.done || false);
    }
  }, [selectedEdit, isEdit]);

  const handleAdd = () => {
    axios.post('http://localhost:3001/add', { task })
      .then(() => {
        getdata();
        toast.success('Task Added Successfully');
        setTask('');
      })
      .catch(() => toast.error('Task Add Failed'));
  };

  const handleEdit = () => {
    if (selectedEdit?._id) {
      axios.put(`http://localhost:3001/edit/${selectedEdit._id}`, { task, done })
        .then(() => {
          getdata();
          setIsEdit(false);
          toast.success('Task Updated Successfully');
          setTask('');
        })
        .catch(() => toast.error('Task Update Failed'));
    }
  };

  return (
    <div>
      <input
        className='input'
        type='text'
        placeholder='Enter Task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className='button'
        type='button'
        onClick={isEdit ? handleEdit : handleAdd}
      >
        {isEdit ? 'Update' : 'Add'}
      </button>
      <ToastContainer position='bottom-right' />
    </div>
  );
};

export default Add;
