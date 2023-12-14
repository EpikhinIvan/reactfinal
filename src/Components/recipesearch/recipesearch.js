import React from 'react';

const RecipeSearch = ({ onSearchChange }) => {
    return (
        <input
            type="text"
            className="recipe-search-input"
            onChange={e => onSearchChange(e.target.value)}
            placeholder="Поиск рецептов"
        />
    );
};

export default RecipeSearch;