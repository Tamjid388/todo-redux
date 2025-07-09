import { createContext, useReducer, type ReactNode } from "react"



export const TodoContext=createContext<TodoContextType | undefined>(undefined)
type ToDoProviderProps={
    children:ReactNode
}
type TodoContextType = {
  todoTitle: string;
};
type TodoContents={
    id?:string,
    title?:string,
    isCompleted?:boolean
}

const initialState:TodoContents[]=[]
const reducer=(currentState:any,action:any)=>{
switch (action.type){
    case "addTodo":
        return [...currentState,action.payload]
     default:
        return currentState   
}

}
export const ToDoProvider = ({children}:ToDoProviderProps) => {

const [state,dispatch]=useReducer(reducer,initialState)

 const values = {
    todoTitle: "This is my first todo application",
    state,dispatch
  };

  return <TodoContext.Provider value={values}>
    {children}
  </TodoContext.Provider>
}
