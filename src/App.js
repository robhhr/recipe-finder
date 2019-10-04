import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const API = 'd0dcff82abb54485948d11c436e31347';

  const[recipes, setRecipes] = useState([]);
  const [query, queryState] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const foodFetch = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&fillIngredients=true&apiKey=${API}`);
    const data = await foodFetch.json();
    setRecipes(data.results);
    console.log(data.results);
  }

  const [search, setSearch] = useState('');

  const searchInput = event => {
    setSearch(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    queryState(search);
    setSearch('');
  }

  return (
    <div className="container">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={searchInput} />
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
          ingredients={recipe.missedIngredients}
          image={`https://spoonacular.com/recipeImages/${recipe.id}-312x150.jpg`}
          />
      ))}
    </div>
  )
}

export default App;
