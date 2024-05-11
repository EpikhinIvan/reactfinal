import React, { Component } from 'react';
import './train.css';
import TrainingWrapper from '../trainingwrapper/trainingwrapper.tsx';
import TrainingSession from '../trainingsession/trainingsession.tsx';

interface Training {
  time: number;
  program: string;
}

interface TrainState {
  selectedTraining: Training | null;
  showTraining: boolean;
}

export default class Train extends Component<{}, TrainState> {
  state: TrainState = {
    selectedTraining: null,
    showTraining: false,
  };

  startTraining = (selectedTraining: Training) => {
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
                initialTime={selectedTraining?.time || 0}
                program={selectedTraining?.program || ''}
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
