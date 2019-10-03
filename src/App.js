import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import { async } from 'q';

const App = () => {

  const API = 'd0dcff82abb54485948d11c436e31347';

  const[recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const foodFetch = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${API}`);
    const data = await foodFetch.json();
    setRecipes(data.results);
    console.log(data.results);
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
      {recipes.map(recipe => (
        <Recipe title={recipe.title} servings={recipe.servings} image={recipe.image}/>
      ))}
    </div>
  )
}

export default App;
