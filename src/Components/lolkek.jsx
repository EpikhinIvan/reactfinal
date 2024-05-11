import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './coach/coach.css';

export default class Coach extends Component {
  state = {
    coaches: [
      { id: 1, name: 'Алексей', bio: 'Тренер по бодибилдингу', img: 'https://images.squarespace-cdn.com/content/v1/647f71d0eb5ab4231c3c17ee/1696351600529-802ABIQVKBLUXDCHE3LH/Keiran+Scadding.jpeg?format=1000w', selected: false },
      { id: 2, name: 'Сергей', bio: 'Тренер по пауэрлифтингу', img: 'https://images.squarespace-cdn.com/content/v1/647f71d0eb5ab4231c3c17ee/c463e2ae-9205-4039-a65b-99e870851c45/Screenshot+2023-08-10+at+07.22.35.png', selected: false },
      { id: 3, name: 'Наталья', bio: 'Тренер по кроссфиту', img: 'https://images.squarespace-cdn.com/content/v1/647f71d0eb5ab4231c3c17ee/abeb44a1-e22d-4ff4-b953-14da2c3acabd/Screenshot+2023-05-06+at+13.20.29.png?format=1000w', selected: false },
      { id: 4, name: 'Ахмет', bio: 'Групповой тренер', img: 'https://images.squarespace-cdn.com/content/v1/647f71d0eb5ab4231c3c17ee/c608c9bf-e52f-43d2-8601-ee7ee97359bb/Screenshot+2023-05-06+at+13.20.16.png', selected: false },
      { id: 5, name: 'Филипп', bio: 'Персональный тренер', img: 'https://images.squarespace-cdn.com/content/v1/647f71d0eb5ab4231c3c17ee/699fc1bc-fd9c-4eaa-8fe7-3853b50c46b4/Screenshot+2023-05-06+at+13.19.42.png', selected: false },
    ],
  }; 

  handleCoachClick = (coachId) => {
    this.setState({ selectedCoachId: coachId });
  }; 

  render() {
    const { coaches } = this.state;

    return (
      <div>
        <div className='background-contacts'><h1>Наши тренера</h1></div>

        <div className="coaches-page">
          <div className="coaches-list">
            {coaches.map(coach => (
              <Link
                key={coach.id}
                to={`/booking/${coach.id}`}
                className="coach"
                onClick={() => this.handleCoachClick(coach.id)}
              >
                <img src={coach.img} alt={coach.name} className="coach-img" />
                <h3 className='h3-coach'>{coach.name}</h3>
                <p className='p-coach'>{coach.bio}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
