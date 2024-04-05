import React from 'react';

const TrainingCard = ({ training, onStartTraining }) => {
  return (
    <div className="training-card" onClick={onStartTraining}>
      <h3>{training.name}</h3>
      <p>Нажмите для начала тренировки</p>
    </div>
  );
};

export default TrainingCard; 