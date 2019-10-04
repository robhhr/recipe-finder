import React from 'react';

const Recipe = ({ title, ingredients, image }) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt={title} />
            <ul>
            {ingredients.map(ingredient => (
                <li className="ingredients">{ingredient.original}</li>
            ))}
            </ul>
        </div>
    );
}

export default Recipe;