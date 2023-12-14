import React, { Component } from 'react'
import './glavnaya.css';
import { Link } from 'react-router-dom';

export default class Glavnaya extends Component {
  render() {
    return (
      <div className='content'>
        <div className='title'>
          <h1>Мы помогли 1000+ людям избавиться от жира!</h1>
        </div>
        <div className='button'><br />
          <Link to="/train">
            <button className='rd'>Начать сейчас!</button>
          </Link>
        </div>
      </div>
    )
  }
}

