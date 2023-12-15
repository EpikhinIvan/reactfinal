import React, { Component } from 'react'
import './advice.css';

export default class Advice extends Component {
  state = {
    tips: [
      { id: 1, title: 'Правильное питание', content: 'Сбалансированное питание - ключ к здоровью.' },
      { id: 2, title: 'Регулярные тренировки', content: 'Регулярные тренировки помогают поддерживать форму.' },
      { id: 3, title: 'Достаточный отдых', content: 'Качественный отдых так же важен, как и тренировки.' },
    ],
  };

  render() {
    const { tips } = this.state;

    return (
      <div className="tips-page">
        <h2>Советы для здоровья и фитнеса</h2>
        <ul className="tips-list">
          {tips.map(tip => ( // используем map для перебора элементов в массиве и выводим
            <li key={tip.id} className="tip">
              <h3>{tip.title}</h3>
              <p>{tip.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}