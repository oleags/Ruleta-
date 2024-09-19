import React from 'react';

interface ControlPanelProps {
  onPlay: () => void;
  onClaim: () => void;
  // Añadir otras funciones si las hay
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onPlay, onClaim }) => {
  return (
    <div className="control-panel">
      <button onClick={onPlay}>Jugar</button>
      <button onClick={onClaim}>Reclamar Premios</button>
      {/* Otros botones aquí */}
    </div>
  );
};

export default ControlPanel;
