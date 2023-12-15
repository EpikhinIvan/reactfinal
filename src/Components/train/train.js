import React, { Component } from 'react';
import './train.css';
import TrainingCard from '../trainingcard/trainingcard';
import TrainingSession from '../trainingsession/trainingsession';
import TrainingWrapper from '../trainingwrapper/trainingwrapper';

export default class Train extends Component {
  state = {
    showTraining: false,
    hasError: false,
  };

    // компонент жизненного цикла
  componentDidCatch(error, errorInfo) {// Обработка ошибок, вызванных внутри компонента или его дочерних компонентов
    this.setState({ hasError: true });// Установка состояния hasError в true
    console.error("Ошибка в компоненте Train:", error, errorInfo); // Вывод ошибки в консоль с дополнительной информацией
  }

  
  startTraining = () => {
    this.setState({ showTraining: true }); // компонент который меняет состояние showtrading
  };

  render() {
    const { showTraining, hasError } = this.state;

    if (hasError) {
      return <div>Произошла ошибка</div>; // проверка на ошибку
    }

    return (
      <div className="training-page">
        {!showTraining 
          ? <TrainingCard onStartTraining={this.startTraining} />
          : <TrainingWrapper>
              <TrainingSession initialTime={30} />
              <TrainingSession initialTime={45} />
            </TrainingWrapper>
        }
      </div>//если не идет тренировка то откроется компонент trainingcard, а если нет то откроется компонент trainingwrapper и передаем initialTime
    );
  }
}

