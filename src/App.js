import React from 'react';
import './App.css';

const App = () => {

  const API = 'd0dcff82abb54485948d11c436e31347';

  const request = `https://api.spoonacular.com/recipes/search?apiKey=${API}`;

  return (
    <div className="container">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search Recipe...</button>
      </form>
    </div>
  )
}

export default App;
