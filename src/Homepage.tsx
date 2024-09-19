import React from 'react';
import ConnectButton from './Components/ConnectButton';
import RouletteGame from './Components/RouletteGame/ruletagame';

const HomePage: React.FC = React.memo(() => {
  return (
    <main className="main-container">
      {/* Título de la aplicación */}
      <h1 className="text-4xl font-bold text-center mb-6">Ruleta DApp - Gana $AdBull's</h1>

      {/* Botón para conectar la wallet */}
      <div className="button-container text-center mb-8">
        <ConnectButton />
      </div>

      {/* Componente del juego de la ruleta */}
      <div className="game-container mb-12">
        <RouletteGame />
      </div>
    </main>
  );
});

export default HomePage;
