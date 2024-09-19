import React, { useState, useEffect } from 'react';
import { BrowserProvider, Contract, ethers } from 'ethers';
import { CONTRACT_ABI } from '../../contracts/RuletaAbi';
import './roulettegame.css'; // Ajusta la ruta si es necesario

const CONTRACT_ADDRESS = '<TU_CONTRATO>'; // Reemplaza con tu dirección de contrato

const RouletteGame: React.FC = () => {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [contract, setContract] = useState<Contract | null>(null);
  const [jackpot, setJackpot] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState<string | null>(null);
  const [isOwner, setIsOwner] = useState(false);

  // Inicializamos el proveedor y el contrato al cargar la DApp
  useEffect(() => {
    initProvider();
  }, []);

  // Llamada para obtener el balance del jackpot cuando tengamos el proveedor y el contrato
  useEffect(() => {
    if (provider && contract) {
      getJackpotBalance();
    }
  }, [provider, contract]);

  // Inicialización del proveedor y del contrato
  const initProvider = async () => {
    try {
      if (!(window as any).ethereum) {
        alert('Instala MetaMask para continuar.');
        return;
      }

      const web3Provider = new BrowserProvider((window as any).ethereum);
      const signer = await web3Provider.getSigner();
      const rouletteContract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      setProvider(web3Provider);
      setContract(rouletteContract);

      // Verificar si el usuario conectado es el propietario
      const owner = await rouletteContract.owner();
      const connectedAddress = await signer.getAddress();
      setIsOwner(owner.toLowerCase() === connectedAddress.toLowerCase());
    } catch (error) {
      console.error('Error inicializando proveedor:', error);
    }
  };

  // Función para consultar el balance del jackpot
  const getJackpotBalance = async () => {
    try {
      const balance = await contract?.getJackpotBalance();
      setJackpot(Number(ethers.formatEther(balance)));
    } catch (error) {
      console.error('Error obteniendo balance del jackpot:', error);
    }
  };

  // Función para jugar a la ruleta
  const playRoulette = async () => {
    try {
      if (!contract) return;

      setIsSpinning(true); // Inicia la animación de la ruleta
      const tx = await contract.playRoulette({
        value: ethers.parseEther('1'), // 1 USDT en BNB
      });

      await tx.wait(); // Espera la confirmación de la transacción

      // Simulamos el resultado de la ruleta
      const randomResult = Math.floor(Math.random() * 9) + 1; // Opciones 1-9
      handleSpinResult(randomResult);

      setIsSpinning(false); // Finaliza la animación
    } catch (error) {
      console.error('Error al jugar a la ruleta:', error);
      setIsSpinning(false); // Asegura que la animación finalice aunque ocurra un error
    }
  };

  // Función para manejar el resultado de la ruleta
  const handleSpinResult = (result: number) => {
    switch (result) {
      case 1:
        setSpinResult('¡Ganaste el Jackpot!');
        break;
      case 2:
        setSpinResult('¡Ganaste 40 AdBulls!');
        break;
      case 3:
        setSpinResult('¡Ganaste 200 AdBulls!');
        break;
      case 4:
        setSpinResult('¡Ganaste 0.5 AdBulls!');
        break;
      case 5:
        setSpinResult('¡Ganaste 5000 AdBulls!');
        break;
      case 6:
        setSpinResult('¡Ganaste 10 AdBulls!');
        break;
      case 7:
        setSpinResult('¡Ganaste 1 AdBull!');
        break;
      case 8:
        setSpinResult('¡Ganaste 5 AdBulls!');
        break;
      case 9:
        setSpinResult('Vuelve a tirar');
        break;
      case 10:
        setSpinResult('No ganaste nada.');
        break;
      default:
        setSpinResult(null);
    }
  };

  // Función para reclamar premios
  const claimPrize = async () => {
    try {
      const tx = await contract?.claimPrize();
      await tx.wait();
      alert('¡Premio reclamado!');
    } catch (error) {
      console.error('Error al reclamar premio:', error);
    }
  };

  // Función para pausar el juego (solo el propietario)
  const pauseGame = async () => {
    try {
      const tx = await contract?.pauseGame();
      await tx.wait();
      alert('Juego pausado');
    } catch (error) {
      console.error('Error al pausar el juego:', error);
    }
  };

  // Función para reanudar el juego (solo el propietario)
  const resumeGame = async () => {
    try {
      const tx = await contract?.resumeGame();
      await tx.wait();
      alert('Juego reanudado');
    } catch (error) {
      console.error('Error al reanudar el juego:', error);
    }
  };

  // Función para retirar fondos (solo el propietario)
  const withdrawFunds = async () => {
    try {
      const tx = await contract?.withdrawFunds();
      await tx.wait();
      alert('Fondos retirados');
    } catch (error) {
      console.error('Error al retirar fondos:', error);
    }
  };

  return (
    <div className="roulette-container">
      <h2>Ruleta de Premios</h2>

      <div className="roulette">
        {isSpinning ? (
          <div className="spinner"></div> // Animación de ruleta
        ) : (
          spinResult ? <p>{spinResult}</p> : <p>Presiona "Girar" para jugar</p>
        )}
      </div>

      <button className="btn-play" onClick={playRoulette} disabled={isSpinning}>
        {isSpinning ? 'Girando...' : 'Girar'}
      </button>

      <button className="btn-claim" onClick={claimPrize}>
        Reclamar Premios
      </button>

      <p className="jackpot">Jackpot actual: {jackpot} BNB</p>

      {isOwner && (
        <div className="owner-actions">
          <h3>Acciones del Propietario</h3>
          <button className="btn-owner" onClick={pauseGame}>
            Pausar Juego
          </button>
          <button className="btn-owner" onClick={resumeGame}>
            Reanudar Juego
          </button>
          <button className="btn-owner" onClick={withdrawFunds}>
            Retirar Fondos
          </button>
        </div>
      )}

      <div className="marketing">
        <h4>Premios posibles:</h4>
        <ul>
          <li>Jackpot</li>
          <li>40 AdBulls</li>
          <li>200 AdBulls</li>
          <li>0.5 AdBulls</li>
          <li>5000 AdBulls</li>
          <li>10 AdBulls</li>
          <li>1 AdBull</li>
          <li>5 AdBulls</li>
          <li>500,000 AdBulls ¡El gran premio!</li> {/* Premio imposible */}
        </ul>
      </div>
    </div>
  );
};

export default RouletteGame;
