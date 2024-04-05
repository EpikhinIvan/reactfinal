import React, { Component } from 'react';
import './train.css';
import TrainingWrapper from '../trainingwrapper/trainingwrapper';
import TrainingSession from '../trainingsession/trainingsession';

export default class Train extends Component {
  state = {
    selectedTraining: null,
    showTraining: false,
  };

  startTraining = (selectedTraining) => {
    this.setState({ showTraining: true, selectedTraining });
  };

  resetTraining = () => {
    this.setState({ showTraining: false, selectedTraining: null });
  };

  render() {
    const { showTraining, selectedTraining } = this.state;

    return (
      <div className='trainpagebody'>
        <div className="training-page">
          {!showTraining ? (
            <TrainingWrapper onStartTraining={this.startTraining} />
          ) : (
            <div>
              <TrainingSession
                initialTime={selectedTraining.time}
                program={selectedTraining.program}
              />
              <button className="reset-button" onClick={this.resetTraining}>
                Сбросить тренировку
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
