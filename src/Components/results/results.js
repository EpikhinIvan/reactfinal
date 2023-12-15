import React, { Component } from 'react'
import './results.css';
export default class Results extends Component {
  state = {
    achievements: [
      { id: 1, title: 'Дней без бургеров', value: 32 },
      { id: 2, title: 'Сожжено калорий', value: 5000 },
      { id: 3, title: 'Проведено тренировок', value: 19 },
    ],
  };

  render() {
    const { achievements } = this.state;

    return (
      <div className="results-page">
        <h2>Ваши Достижения</h2>
        <ul>
          {achievements.map(achievement => (
            <li key={achievement.id}>
              <h3>{achievement.title}</h3>
              <p>{achievement.value}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
