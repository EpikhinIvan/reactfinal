import React from 'react';
import { Link } from 'react-router-dom';

const Submenu = () => {
  return (
    <div className="submenu">
      <Link to="/">Главная страница</Link>
      <Link to="/train">Тренировки</Link>
      <Link to="/nutrition">Питание</Link>
      <Link to="/results">Результаты</Link>
      <Link to="/coach">Тренера</Link>
      <Link to="/shop">Магазин</Link>
      <Link to="/advice">Советы</Link>
      <Link to="/contacts">Обратная связь</Link>
    </div>
  );
};

export default Submenu;