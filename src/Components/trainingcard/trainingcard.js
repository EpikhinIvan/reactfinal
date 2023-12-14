import React from 'react';

const TrainingCard = ({onStartTraining }) => {
  return (
    <div className="training-card" onClick={onStartTraining}>
      <h3>Тренировка груди</h3>
    </div>
  );
};

export default TrainingCard;