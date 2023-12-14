import React from 'react';

const RecipeFilter = ({ onCategoryChange }) => {
    return (
        <select className="recipe-filter-select" onChange={e => onCategoryChange(e.target.value)}>
            <option value="Все">Все</option>
            <option value="Салат">Салат</option>
            <option value="Напиток">Напиток</option>
        </select>
    );
};

export default RecipeFilter;