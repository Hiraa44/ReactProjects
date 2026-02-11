import React from 'react' 
import { useState } from 'react';



export default function Home() {
    const [ search , setSearch] = useState("");
  return (
    <div>
       <div>
      <p>This is the Home Page! </p>
      <input type="text" value={search} placeholder="Search Any Recipie....." className='border-spacing-7'></input>
      <button className='bg-red-500'>Search</button>
       </div>
    </div>
  )
}
