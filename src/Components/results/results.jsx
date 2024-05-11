import React, { Component } from 'react';
import './results.css';

export default class Results extends Component {
  state = {
    bmi: null,
    newWeight: '',
    newHeight: '',
    recommendations: [
      { id: 1, title: 'Недостаточный вес', recommendation: 'Увеличьте потребление калорий и употребляйте более плотные продукты. Рекомендованое количество калорий: 1600' },
      { id: 2, title: 'Нормальный вес', recommendation: 'Продолжайте поддерживать баланс между потреблением калорий и физической активностью. Рекомендованое количество калорий: 1800' },
      { id: 3, title: 'Избыточный вес', recommendation: 'Снизьте потребление калорий и увеличьте физическую активность. Рекомендованое количество калорий: 2000' },
    ],
  };

  calculateBMI = () => {
    const { newWeight, newHeight } = this.state;
    if (newWeight && newHeight) {
      const weight = parseFloat(newWeight);
      const height = parseFloat(newHeight);
      const bmi = (weight / Math.pow(height, 2)).toFixed(1);
      this.setState({ bmi });
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddAchievement = () => {
    this.calculateBMI();
  };

  render() {
    const { bmi, newWeight, newHeight, recommendations } = this.state;

    return (
      <div>
        <div className='background-contacts'><h1>BMI Калькулятор</h1></div>


        <div className="results-page">
        
        <h2>Расчет BMI</h2>
        <div className="bmi-calculation">
          <label>
            Вес (кг):
            <input
              type="number"
              name="newWeight"
              value={newWeight}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Рост (м):
            <input
              type="number"
              name="newHeight"
              value={newHeight}
              onChange={this.handleInputChange}
            />
          </label>
          <button className='resultsbutton' onClick={this.handleAddAchievement}>Рассчитать BMI</button>
        </div>

        {bmi && (
          <div className="bmi-result">
            <h3>Ваш BMI: {bmi}</h3>
            {recommendations.map((recommendation) => (
              bmi >= recommendation.id * 5 && bmi < (recommendation.id + 1) * 5 && (
                <div key={recommendation.id}>
                  <h4>{recommendation.title}</h4>
                  <p>{recommendation.recommendation}</p>
                </div>
              )
            ))}
          </div>
        )}
      </div>
      </div>
      
    );
  }
}
