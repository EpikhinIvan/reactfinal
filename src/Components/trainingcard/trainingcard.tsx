import React from 'react';

interface Training {
  name: string;
}

interface Props {
  training: Training;
  onStartTraining: () => void;
}

const TrainingCard: React.FC<Props> = ({ training, onStartTraining }) => {
  return (
    <div className="training-card" onClick={onStartTraining}>
      <h3>{training.name}</h3>
      <p>Нажмите для начала тренировки</p>
    </div>
  );
};

export default TrainingCard;
 