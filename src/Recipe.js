import React from 'react';
import App from './App';

const Recipe = ({ title, servings, image }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{servings}</p>
            <img src={image}  alt="" />
        </div>
    );
}

export default Recipe;