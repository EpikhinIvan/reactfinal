import React, { Component } from 'react'
import './coach.css';

export default class Coach extends Component {
  state = {
    coaches: [
      { id: 1, name: 'Алексей', bio: 'Тренер по бодибилдингу', img: 'https://sportishka.com/uploads/posts/2021-11/1636751509_43-sportishka-com-p-smeshnoi-fitnes-trener-fitnes-krasivie-fot-44.jpg' },
      { id: 2, name: 'Сергей', bio: 'Тренер по пауэрлифтингу', img: 'https://sportishka.com/uploads/posts/2022-03/1648489751_57-sportishka-com-p-zagorulko-trener-sport-krasivie-foto-63.jpg' },
    ]
  };

  render() {
    return (
      <div className="coaches-page">
        <h2>Наши тренеры</h2>
        <div className="coaches-list">
          {this.state.coaches.map(coach => ( //c помощью метода map перебираем каждый элемент и по итогу выводим
            <div key={coach.id} className="coach">
              <img src={coach.img} alt={coach.name} className="coach-img" />
              <h3>{coach.name}</h3>
              <p>{coach.bio}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
