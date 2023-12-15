import React, { Component } from 'react'
import './nutrition.css';
import RecipeSearch from '../recipesearch/recipesearch';
import RecipeFilter from '../recipefilter/recipefilter';

export default class Nutrition extends Component {
  state = {
    recipes: [
      { id: 1, title: 'Цезарь с курицей', category: 'Салат', ingredients: 'курица, соус, сыр, салат' },
      { id: 2, title: 'Кровавая Мэри', category: 'Напиток', ingredients: 'водка, томатный' },
    ],
    searchQuery: '',
    selectedCategory: 'Все',
  };

  render() {
    const { recipes, searchQuery, selectedCategory } = this.state;

    const filteredRecipes = recipes
      .filter(recipe => recipe.title.toLowerCase().includes(searchQuery.toLowerCase())) // используется filter который создает новый массив 
      .filter(recipe => selectedCategory === 'Все' || recipe.category === selectedCategory);

    return (//компонентам передается onserachchange и oncategorychange
      <div className="nutrition">
        <RecipeSearch onSearchChange={query => this.setState({ searchQuery: query })} /> 
        <RecipeFilter onCategoryChange={category => this.setState({ selectedCategory: category })} />
        <ul>
          {filteredRecipes.map(recipe => (//проходится по каждым элемента filteredrecipes и показывает "вставленные " значения
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>Категория: {recipe.category}</p>
              <p>Ингредиенты: {recipe.ingredients}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}