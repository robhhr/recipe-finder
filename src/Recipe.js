import React from 'react';

const Recipe = ({ title, servings, image, time }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>Time to cook: {time} min</p>
            <p>Servings: {servings}</p>
            <img src={image} alt={title} />
        </div>
    );
}

export default Recipe;