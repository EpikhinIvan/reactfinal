import React, { Component, ChangeEvent } from 'react';
import './nutrition.css';
import RecipeSearch from '../recipesearch/recipesearch';
import RecipeFilter from '../recipefilter/recipefilter';

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  category: string;
  image: string;
}

interface State {
  searchQuery: string;
  selectedCategory: string;
  data: Recipe[] | null;
  isLoading: boolean;
  error: Error | null;
}

export default class Nutrition extends Component<{}, State> {
  state: State = {
    searchQuery: '',
    selectedCategory: 'Все',
    data: null,
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const apiKey = "d8d0bd78e00342ccac87a1af7f549f0a";
      const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Не могу найти!');
      }
      const data: { results: Recipe[] } = await response.json();
      this.setState({ data: data.results, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    const { searchQuery, selectedCategory, data, isLoading, error } = this.state;
    const recipes = data || [];   
    const filteredRecipes = recipes
      .filter(recipe => recipe.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .filter(recipe => selectedCategory === 'Все' || recipe.category === selectedCategory);

    return (
      <div className="nutrition">
        <RecipeSearch onSearchChange={(query: string) => this.setState({ searchQuery: query })} />
        <RecipeFilter onCategoryChange={(category: string) => this.setState({ selectedCategory: category })} />
        <ul>
          {filteredRecipes.map(recipe => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>Ингредиенты: {recipe.ingredients}</p>
              <img src={recipe.image} alt={recipe.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
