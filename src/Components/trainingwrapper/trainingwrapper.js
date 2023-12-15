import React, { Component } from 'react';

class TrainingWrapper extends Component {
  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (child, index) => // Используем метод React.Children.map для обработки дочерних элементов
          React.cloneElement(child, { key: index, extraProp: 'Mayo' })// Клонируем каждый дочерний элемент и добавляем свойство ноое
        )}
      </div>
    );
  }
}

export default TrainingWrapper;
