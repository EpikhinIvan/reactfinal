import React, { Component } from 'react';
import withDataLoader from './withDataLoader';
import './shop.css';

class Shop extends Component {
  state = {
    cart: [],
  };

  handleAddToCart = meal => {
    this.setState(prevState => ({
      cart: [...prevState.cart, meal]
    }));
  };

  getTotalPrice = () => {
    const pricePerItem = 1000;
    return this.state.cart.length * pricePerItem;
  };

  render() {
    const { data: meals, isLoading, error } = this.props;
    const { cart } = this.state;
  
    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;
  
    return (
      <div>
        <div className='background-contacts'><h1>Магазин</h1></div>
        
        <div className="shop-page">

          <div className="cart">
            <h3>Ваша корзина:</h3>
            <p>Общая стоимость: {this.getTotalPrice()} тг.</p>
          </div>
          
          <h2>Магазин</h2>
          <ul>
            {meals && meals.map(meal => (
              <li key={meal.idMeal}>
                <h3>{meal.strMeal}</h3> 
                <img src={meal.strMealThumb} alt={meal.strMeal} className="product-image"/>
                <p>Цена: 1000 тг.</p>
                <button className='shopbutton' onClick={() => this.handleAddToCart(meal)}>Добавить в корзину</button>
              </li>
            ))} 
          </ul>
        </div>
      </div>
    );
  }
}

export default withDataLoader(Shop, 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');