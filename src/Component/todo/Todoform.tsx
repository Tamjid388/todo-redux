import React, { useContext, useState, type FormEvent } from 'react'
import { TodoContext } from '../../Context/ToDoProvider'

export const Todoform = () => {
    const {todoTitle,dispatch}=useContext(TodoContext)!
    const [task,setTask]=useState('')

    const handleSubmit=(e:FormEvent)=>{
          e.preventDefault()
    }

    const todo={
      id:Math.random().toString(36).substring(2,7),
      todoTitle:task,
      isCompleted:false
    }

    dispatch({type:'addTodo',payload:todo})
    console.log(todo);
  return (
    <div>
        <h1>Todoform :{todoTitle}</h1>
        <h1>Add TO Do</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor=""
          className='font-semibold text-blue-800 mt-10'
          >Todo</label>
          <input type="text" className='input my-4'
          onBlur={(e)=>setTask(e.target.value)}
          />
          <button className="btn btn-primary"
          type='submit'
          >Submit</button>
        </form>
    </div>
  )
}
