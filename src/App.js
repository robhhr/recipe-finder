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
    const foodFetch = await fetch(`https://api.spoonacular.com/recipes/search?query=cheese&number=2&apiKey=${API}`);
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
        <Recipe
          key={recipe.title}
          title={recipe.title}
          servings={recipe.servings}
          image={`https://spoonacular.com/recipeImages/${recipe.id}-312x150.jpg`}
          time={recipe.readyInMinutes}
          />
      ))}
    </div>
  )
}

export default App;
