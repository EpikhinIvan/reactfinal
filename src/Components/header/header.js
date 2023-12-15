import React, { Component } from 'react'
import './header.css';
import Submenu from '../submenu/submenu';

export default class AppHeader extends Component {

  state = {
    isMenuOpen: false,
  };

//создаем метод  который меняет состояние открытости меню 
  mouseEnter = () => {
    this.setState({ isMenuOpen: true });
  };
//создаем метод  который меняет состояние открытости меню 

  mouseLeave = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { isMenuOpen } = this.state;

    return (

      <header className="header">
        <img src="https://celes.club/pictures/uploads/posts/2023-05/1685233140_celes-club-p-raskraska-kfs-risunok-vkontakte-16.png" alt='lol' className='companyImage'></img>
        <div className='gym'>Качалка форевер</div>
        <nav onClick={this.mouseEnter} onMouseLeave={this.mouseLeave}>
          <img src='https://cdn-icons-png.flaticon.com/512/10024/10024467.png' alt='lol' className='navMenu'></img>

          {isMenuOpen && <Submenu />}
        </nav>
      </header>
      
    );
  }
}

