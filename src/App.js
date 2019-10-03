import React, { useEffect, useState } from 'react';
import './App.css';
import { async } from 'q';

const App = () => {

  const API = 'd0dcff82abb54485948d11c436e31347';

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const foodFetch = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${API}`);
    const data = await foodFetch.json();
    console.log(data)
  }

  return (
    <div className="container">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button
        className="search-button"
        type="submit"
        >
        Search recipes...
        </button>
      </form>
      {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
    </div>
  )
}

export default App;
