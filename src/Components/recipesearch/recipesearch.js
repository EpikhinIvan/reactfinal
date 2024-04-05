import React from 'react';

const RecipeSearch = ({ onSearchChange }) => {
    return (
        <input
            type="text"
            className="recipe-search-input"
            onChange={e => onSearchChange(e.target.value)}//передается текущее состояние текстового поля
            placeholder="Поиск рецептов"
        />
    );
};

export default RecipeSearch; 