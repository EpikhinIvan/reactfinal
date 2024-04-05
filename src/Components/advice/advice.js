import React, { Component } from 'react';
import './advice.css';

export default class Advice extends Component {
  state = {
    tips: [
      { id: 1, title: 'Правильное питание', content: 'Сбалансированное питание - ключ к здоровью.', link: 'https://profilaktica.ru/for-population/profilaktika-zabolevaniy/vse-o-pravilnom-pitanii/printsipy-zdorovogo-pitaniya/' },
      { id: 2, title: 'Регулярные тренировки', content: 'Регулярные тренировки помогают поддерживать форму.', link: 'https://www.sports.ru/tribuna/blogs/workoutsfaq/2869692.html' },
      { id: 3, title: 'Достаточный отдых', content: 'Качественный отдых так же важен, как и тренировки.', link: 'https://www.thevoicemag.ru/health/sport/vydohni-otdyh-mezhdu-uprazhneniyami/' },
      { id: 4, title: 'Пить воду', content: 'Регулярное питье важно для поддержания водного баланса в организме.', link: 'https://www.bbc.com/russian/vert-fut-47880538' },
      { id: 5, title: 'Избегать стресса', content: 'Стресс негативно влияет на здоровье. Практикуйте методы релаксации.', link: 'https://m.sport.business-gazeta.ru/article/256467' },
    ],
    isMenuOpen: false,
    selectedTip: null,
  };

  mouseOpen = (id) => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
      selectedTip: id,
    }));
  };

 

  toggleMenu = () => {
    this.setState((prevState) => ({ 
      isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    const { tips, selectedTip } = this.state; 

    return (
      <div className="tips-page">
        <div className='background-tips'><h1>Советы</h1></div>

        <div className='Joker'>
          <h2 className="tips-heading">Советы для здоровья и фитнеса</h2>

          <div className='ul-advice'>
            <ul className="tips-list">
              {tips.map(tip => (
                <li key={tip.id} className={`tip`}>
                  <div className="tip-header">
                    <h3 className="tip-title">{tip.title}</h3>
                    <button className='btn-tip' onClick={() => this.mouseOpen(tip.id)}>+</button>
                  </div>

                  {selectedTip === tip.id && (
                    <p className="tip-content">
                      {tip.content}{' '}
                      <a href={tip.link} target="_blank" rel="noopener noreferrer">
                        Подробнее
                      </a>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}