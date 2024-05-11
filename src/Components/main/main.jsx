import React, { Component } from 'react'
import './main.css';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
      <div className='mainbackground'>
        
        <div className='content'> 

          <div className='title'>
            <h1 className='main-h1'>ALMATY'S <span className='main-span'>BEST</span> WORKOUT</h1>
          </div>

          <p className='main_p'>The Fitness Factory</p>

          <div className='divbutton'><br />
            <Link to="/train">
              <p className='main-p'>Начать сейчас</p> 
            </Link>
          </div>{/* //используем компонент link чтобы сделать марштруты */}

        </div>
      </div>
    )
  }
}

