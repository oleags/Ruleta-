import React from 'react';

interface JackpotDisplayProps {
  jackpot: number;
}

const JackpotDisplay: React.FC<JackpotDisplayProps> = ({ jackpot }) => {
  return (
    <div className="jackpot-display">
      <h2>JACKPOT</h2>
      <p>{jackpot} BNB</p>
    </div>
  );
};

export default JackpotDisplay;
