

import './App.css'
import { decreament, increament, test } from './redux/features/CounterSlice'
import { useAppDispatch, useAppSelector } from './redux/Hooks/hook'




function App() {
  const {count}=useAppSelector((state)=>state.counter)
const dispatch=useAppDispatch()
  return (
    <>  

<div className='
border py-12
container mx-auto my-16 flex justify-center items-center'>
     <button
     onClick={()=>dispatch(decreament())}
     className="btn btn-primary">Decreament -</button>
   <h1 className='text-4xl font-bold mx-8'>{count}</h1>
  
   <button
   onClick={()=>dispatch(increament())}
   className="btn btn-primary">Increament +</button>
   
   <button
   onClick={()=>dispatch(test(5))}
   className="btn btn-primary">Testing+</button>


</div>
      
      
    </>
  )
}

export default App
