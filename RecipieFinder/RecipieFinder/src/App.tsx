
import { useState } from 'react';
import './App.css'
import Home from './Components/Home.tsx';

function App() {
 const [users, Setuser] = useState(["Chciken1", "Chicken2", "Chicken3"]);
 
  return (
    <>
      <Home></Home>
      <h1>Name</h1>
      <ul>Show Recipies {users.map((user,key)=>(
       <li key={key}>{user}</li>
      ))}

      </ul>
    </>
  )
}

export default App
