import { useState } from 'react'

import './App.css'

import { ToDoProvider } from './Context/ToDoProvider'
import { Todoform } from './Component/todo/Todoform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   
      <div className="">
       
       
     <ToDoProvider>
<div className="">
        <Todoform/>
</div>
     </ToDoProvider>
      </div>
      
    </>
  )
}

export default App
