import { useState } from 'react'

import './App.css'

function App() {
  const [strlength , setLength]= useState(0);
  const [characters, setCharacters] = useState(false);
  const [NumbersAllowed , setNumbersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError]  = useState(false);
  
  function AllowedCharacter(event: React.ChangeEvent<HTMLInputElement>){ 
     console.log(characters); 
     setCharacters(event.target.checked);
  }
  function AllowedNumbers(event: React.ChangeEvent<HTMLInputElement>){
    console.log(NumbersAllowed);
    setNumbersAllowed(event.target.checked);
  }
  function GeneratePassword(strlength : number,characters : Boolean, NumbersAllowed : Boolean){
   let chars = "";

  if (characters) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (NumbersAllowed) chars += "0123456789";

  if (!chars) {
   setError(true);
  return;
  }
  else{

  let pwd = "";
  for (let i = 0; i < strlength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    pwd += chars[randomIndex];
  }

  setPassword(pwd);

  console.log(pwd);
}
}
  
  return (
    <>
      <div>
        <h1>Password Generator</h1>
        <input type="text"  value={password}/><br></br>
     
        <button onClick = {() => GeneratePassword(strlength, characters, NumbersAllowed)}>Generate Password</button><br></br>
        <input type="range" min={0} max={100} value={strlength}  onChange={(event)=>setLength(Number(event.target.value))}  step="1" />
        <label>{strlength}</label><br></br>
        <input type="checkbox" onChange={AllowedCharacter} />Characters <br></br>
         { error ? <p style={{ color: 'Red', fontSize: '20px' }}>Characters Required</p> : null }
        
        <input type="checkbox" onChange={AllowedNumbers}/>Numbers <br></br>
       </div>
       </>
  )
}

export default App
