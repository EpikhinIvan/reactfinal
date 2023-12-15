import React from 'react';

const TrainingCard = ({ onStartTraining }) => {   // получает пропс onStartTraining
  return (
    <div className="training-card" onClick={onStartTraining}> 
      <h3>Нажмите для начала тренировки</h3>
    </div>// обработчик клика
  );
};

export default TrainingCard;
