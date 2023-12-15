import React, { Component } from 'react';
import withDataLoader from './withDataLoader';
import './shop.css';

class Shop extends Component {
  state = {
    filter: 'Все',
    cart: [],
  };

  handleAddToCart = meal => {// Обработчик добавления блюда в корзину
    this.setState(prevState => ({// Используем функцию setState для обновления состояния
      cart: [...prevState.cart, meal]// Добавляем выбранное блюдо в корзину
    }));
  };

  handleFilterChange = category => {// Обработчик изменения фильтра по категории
    this.setState({ filter: category });  
  };

  getTotalPrice = () => {
    // Для демонстрации, предположим, что у каждого блюда фиксированная цена
    const pricePerItem = 1000;
    return this.state.cart.length * pricePerItem;
  };

  render() {
    const { data: meals, isLoading, error } = this.props;
    const { filter, cart } = this.state;

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;

    const filteredMeals = meals && meals.filter(meal => filter === 'Все' || meal.strCategory === filter);

    return (
      <div className="shop-page">
        <h2>Магазин</h2>
        <ul>
          {filteredMeals.map(meal => ( // Проходим по каждому блюду в отфильтрованном списке
            <li key={meal.idMeal}>
              <h3>{meal.strMeal}</h3> 
              <img src={meal.strMealThumb} alt={meal.strMeal} className="product-image"/>
              <p>Цена: 1000 тг.</p>
              <button onClick={() => this.handleAddToCart(meal)}>Добавить в корзину</button>
            </li> // Берется много инфомации из апи
          ))}
        </ul>
        <div className="cart">
          <h3>Ваша корзина:</h3>
          <p>Общая стоимость: {this.getTotalPrice()} тг.</p>
        </div>
      </div>
    );
  }
}

export default withDataLoader(Shop, 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'); //экспортируем компонент  обернутый в HOC
