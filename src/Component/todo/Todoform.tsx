import React, { useContext } from 'react'
import { TodoContext } from '../../Context/ToDoProvider'

export const Todoform = () => {
    const {todoTitle}=useContext(TodoContext)!
  return (
    <div>
        <h1>Todoform :{todoTitle}</h1>
    </div>
  )
}
