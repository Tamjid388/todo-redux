import { Children, createContext, type ReactNode } from "react"



export const TodoContext=createContext<TodoContextType | undefined>(undefined)
type ToDoProviderProps={
    children:ReactNode
}
type TodoContextType = {
  todoTitle: string;
};
export const ToDoProvider = ({children}:ToDoProviderProps) => {
 const values: TodoContextType = {
    todoTitle: "This is my first todo application",
  };

  return <TodoContext.Provider value={values}>
    {children}
  </TodoContext.Provider>
}
