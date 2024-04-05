import React, { Component } from 'react';
import TrainingCard from '../trainingcard/trainingcard';

export default class TrainingWrapper extends Component {
  availableTrainings = [
    {
      id: 1,
      name: 'Тренировка на бицепс',
      time: 30,
      program: '1. Подтягивания: 3x10\n2. Молотки: 3x12\n3. Сгибания гантелей: 3x15',
    },
    {
      id: 2,
      name: 'Тренировка на грудь',
      time: 45,
      program: '1. Жим штанги лежа: 4x8\n2. Жим гантелей: 3x10\n3. Разводка га нтелей: 3x12',
    },
  ];

  render() {
    const { onStartTraining } = this.props;

    return (
      <div className='petya'>
          <h1>Выберите тренировку</h1>
        {this.availableTrainings.map(training => (
          <TrainingCard
            key={training.id}
            training={training}
            onStartTraining={() => onStartTraining(training)}
          />
        ))}
      </div>
    );
  }
}
