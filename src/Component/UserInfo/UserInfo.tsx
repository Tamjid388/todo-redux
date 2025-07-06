import { useState } from "react"



export default function UserInfo() {
    const [user,setUser]=useState({
        name:"",
        age:"0",
        hobbies:[]
    })
  
    function handleClick(e:any)
    {
    e.preventDefault();
    console.log(user);
    }
  return (
    <div>
        <h1>UserInfo</h1>
         <form className="fieldset">
          
         
          <label className="label">Name</label>
          <input
           onChange={(e)=>setUser({...user,name:e.target.value})}
            name="name"
            type="text" className="input"
           placeholder="Name" />

           <label className="label">Age</label>
          <input type="text"
          onChange={(e)=>setUser({...user,age:e.target.value})} className="input" name="age" placeholder="Age" />
         
          <label className="label">Hobbies</label>
          <input 
          type="text"
           className="input" placeholder="Hobbies"
           onChange={(e)=>setUser({...user,hobbies:[...user.hobbies,e.target.value]})}
           />
      
          <button
          onClick={handleClick}
          type="submit"
          className="btn btn-neutral mt-4">Login</button>
        </form>
    </div>
  )
}
