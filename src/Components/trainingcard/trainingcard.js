import React from 'react';

const TrainingCard = ({ onStartTraining }) => {
  return (
    <div className="training-card" onClick={onStartTraining}>
      <h3>Нажмите для начала тренировки</h3>
    </div>
  );
};

export default TrainingCard;
