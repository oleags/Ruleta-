import React, { useState } from 'react';
import JackpotDisplay from './Components/ComponentsRuleta/JackpotDisplay';
import RouletteWheel from './Components/ComponentsRuleta/RouletteWheel';
import ControlPanel from './Components/ComponentsRuleta/ControlPanel';
import EventLog from './Components/ComponentsRuleta/EventLog';
import ConnectButton from './Components/ConnectButton';

const HomePage: React.FC = () => {
  const [jackpot, setJackpot] = useState<number>(0.0);
  const [events, setEvents] = useState<string[]>([]);

  const handleSpinComplete = (result: string) => {
    setEvents((prevEvents) => [...prevEvents, `Resultado: ${result}`]);
    if (result === 'Jackpot') {
      setJackpot((prevJackpot) => prevJackpot + 10); // Actualizar el Jackpot como ejemplo
    }
  };

  const handlePlay = () => {
    setEvents((prevEvents) => [...prevEvents, 'Iniciando juego...']);
    // Aquí iría la lógica para el pago y la interacción con el contrato inteligente
  };

  const handleClaim = () => {
    setEvents((prevEvents) => [...prevEvents, 'Reclamando premio...']);
    // Aquí iría la lógica para la reclamación de premios
  };

  return (
    <main className="main-container">
      <div className="header">
        <JackpotDisplay jackpot={jackpot} />
      </div>
      <div className="button-container">
        <ConnectButton />
        </div>
      <div className="content">
        <div className="left-panel">
          <ControlPanel onPlay={handlePlay} onClaim={handleClaim} />
        </div>
        <div className="center-panel">
          <RouletteWheel onSpinComplete={handleSpinComplete} />
        </div>
        <div className="right-panel">
          <EventLog events={events} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
