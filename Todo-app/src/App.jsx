import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo]  = useState([]);
  const [newInput, setNewInput] = useState("");
  const [EditFlag, setEditFlag] = useState(false);

  function showInput(){
    if (!input.trim()) return; 
   const newTask ={
    id : Date.now(),
    name : input 
   }
   console.log(Date.now());
    setTodo([...todo, newTask]);   //setting Todo task list
    setInput("");  //setting input as empty
}
  function DeleteTodo(id){
    
    setTodo(todo.filter(todo => todo.id !== id)); //for filtering Todo
    console.log("Todo deleted:", todo.id); 
  }
  function EditTodo(ture){

  }
  return (
    <>
     <h1><b>Todo Application...!!!</b></h1>
     <input
     type="text"
     value ={input}
     placeholder = "Enter Todo" onChange={(event)=>setInput(event.target.value)}
     ></input>
     <button onClick ={()=>showInput()}>Add Todo</button>
    
     
    <ul>{todo.length>0 &&
        
         todo.map(todo => (

         <li key={todo.id} >
          {todo.name}
          {EditFlag ?  
          <input
     type="text"
     value ={newInput}
     placeholder = "Edit Todo" onChange={(event)=>setNewInput(event.target.value)}
     ></input> : null}
    <div class="actions">
    <button onClick={()=>DeleteTodo(todo.id)}>Delete</button>
    <button onClick={()=>setEditFlag(true)}>Edit Todo</button>
    </div>
    

       </li>
 ))}
      </ul>
    </>
  )
}

export default App
