import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo]  = useState([]);
  const [newInput, setNewInput] = useState("");
  const [EditFlag, setEditFlag] = useState(false);
  const [editId, setEditId] = useState(0);
 
  function showInput(){
    if (!input.trim()) return; 
   const newTask ={
    id : Date.now(),
    name : input 
   }
   console.log(Date.now());
   console.log(todo);
    setTodo([...todo, newTask]);  
    setNewInput(input); //setting Todo task list
    setInput("");  //setting input as empty
}
  function DeleteTodo(id){
    
    setTodo(todo.filter(todo => todo.id !== id)); //for filtering Todo
    console.log("Todo deleted:", todo.id); 
  }
 
  function EditTodo(item){
    setEditId(item.id);
    setNewInput(item.name);
   // update the state          // hide edit input
     
  
}
  function SaveTodo(item){
    const updatedTodos = todo.map((item) =>
    item.id === editId ? { ...item, name: newInput } : item
    );
     setTodo(updatedTodos);  
     console.log(editId)   ;
     console.log(item.name) ;
  setEditId(null);
  setNewInput("");
  alert("The Todo has been Edited Successfully");
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
    
     
    <ul>
  {todo.length > 0 &&
    todo.map((item) => (
      <li key={item.id}>
            {editId ===item.id ? (
          <>
            <input
              type="text"
              value={newInput}
              onChange={(e) => setNewInput(e.target.value)}
            />

            <button type="submit" onClick={()=>SaveTodo(item)}>Save</button>
          </>
        ): ( <p>{item.name}</p> )}

        <div className="actions">

          <button onClick={() => DeleteTodo(item.id)}>
            Delete
          </button>

          <button onClick={() => EditTodo(item)}>
            Edit Todo
          </button>

        </div>

      </li>

    ))
  }
</ul>
    </>
  )
}

export default App
