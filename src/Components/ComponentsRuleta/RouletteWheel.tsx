import React, { useState } from 'react';
import './ComponentsRuleta.css';


interface RouletteWheelProps {
  onSpinComplete: (result: string) => void;
}

const RouletteWheel: React.FC<RouletteWheelProps> = ({ onSpinComplete }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const startSpin = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const results = ['5000 AdBulls', 'Jackpot', '10 AdBulls', '1 AdBull', '40 AdBulls', '200 AdBulls', '0.5 AdBulls', '5 AdBulls', '500,000 AdBulls'];
      const randomIndex = Math.floor(Math.random() * results.length);
      const selectedResult = results[randomIndex];
      setIsSpinning(false);
      onSpinComplete(selectedResult);
    }, 3000); // Spin for 3 seconds
  };

  return (
    <div className="roulette-container">
      <div className={`roulette-wheel ${isSpinning ? 'spinning' : ''}`}>
        <div className="wheel-section">5000 AdBulls</div>
        <div className="wheel-section">Jackpot</div>
        <div className="wheel-section">10 AdBulls</div>
        <div className="wheel-section">1 AdBull</div>
        <div className="wheel-section">40 AdBulls</div>
        <div className="wheel-section">200 AdBulls</div>
        <div className="wheel-section">0.5 AdBulls</div>
        <div className="wheel-section">5 AdBulls</div>
        <div className="wheel-section">500,000 AdBulls</div>
      </div>
      <button onClick={startSpin} disabled={isSpinning}>Girar</button>
    </div>
  );
};

export default RouletteWheel;
