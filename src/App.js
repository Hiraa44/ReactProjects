import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import React, { useState, useEffect } from "react";
import axios from 'axios';


function App() {
  const [recipie, setRecipie] = useState("");
  const [search , setSearch] = useState("");
  const [res,setRes] = useState([]);
  const HandleChange = (e)=>{
    setRecipie(e.target.value)
   // setSearch(recipie);
    console.log(recipie)
 
  }
  const SearchRecipie=()=>{
    console.log("This is Search Function");
     setSearch(recipie);
  };
  useEffect (()=>{
    if(search){
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response)=>response.json())
      .then((data)=>{
         setRes(data.meals || []);
         console.log(data);
      })
      console.log("Use Effect called")
    }
  },[search]);
  return (
    <div className="App">
       <Navbar></Navbar>
  <div className="bg-gray-400 text-base space-y-20 p-20 h-screen">
    <div className="max-w-[1000px] mx-auto w-1/2 bg-white h-[5000px] w-fit h-fit rounded-lg p-6 ">
     
      <h1 className="text-3xl font-semibold italic text-gray-800 text-center">
        Find Recipes
      </h1>
      
      <p className="text-base font-serif text-black">
        Enter Recipe to Search
      </p>
      
      <input
        className="border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md p-2 w-full outline-none"
        placeholder="Enter Recipe to Search..."
        name="recipieName"
        onChange={HandleChange}
      />
      
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
        onClick={SearchRecipie}
      >
        Search
      </button>
      
      {search && (
        <p className="mt-4 text-lg text-gray-700">
          You have searched the Recipie for {search}
        </p>
      )}

      {/* Recipe results */}
      <div className="space-y-4">
        {res.map((meal, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-2">
            <h1 className="text-black font-sans font-semibold italic"></h1>
            <p className="text-yellow-500 bold font-sans">{meal.strMeal}</p>
            <p class="font-sans font-semi bold">{meal.strCategory}</p>
            <p>{meal.strArea}</p>      
            <p className="italic">Instructions</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {meal.strInstructions.split('\n')
            .filter(step => step.trim() !== "").map((step, index) => (
            <li key={index}>{step}</li> ))}</ul>
          </div>
        ))}
      </div>

    </div>
  </div>
  

</div>
  )}

export default App;
