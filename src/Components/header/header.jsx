import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { setIsAtTop } from '../../redux/action';

class AppHeader extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const isAtTop = window.scrollY === 0;
    this.props.setIsAtTop(isAtTop);
  };

  render() {
    const { isAtTop, coaches } = this.props;
    const headerClass = isAtTop ? 'header' : 'header headerScrolled';

    return (
      <header className={headerClass} id="header">
        <div className="headerdiv">
          <a href="http://localhost:3000/">
            <img
              src={isAtTop ? coaches[1] : coaches[0]} 
              alt="company image"
              className="companyImage"
            />
          </a>
          <div className="submenu">
            <Link to="/">Главная страница</Link>
            <Link to="/train">Тренировки</Link>
            <Link to="/results">Калькулятор</Link>
            <Link to="/coach">Тренера</Link>
            <Link to="/shop">Магазин</Link>
            <Link to="/advice">Советы</Link>
            <Link to="/contacts">Обратная связь</Link>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAtTop: state.header.isAtTop,
    coaches: state.header.coaches
  };
};

const mapDispatchToProps = {
  setIsAtTop
};  

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
