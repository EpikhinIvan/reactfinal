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

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error("Ошибка в компоненте Train:", error, errorInfo);
  }

  startTraining = () => {
    this.setState({ showTraining: true });
  };

  render() {
    const { showTraining, hasError } = this.state;

    if (hasError) {
      return <div>Произошла ошибка</div>;
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
      </div>
    );
  }
}

