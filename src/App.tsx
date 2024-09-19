import { Web3ModalProvider } from './web3modal';
import HomePage from './Homepage';

const App = () => {
  return (
    <Web3ModalProvider>
      <HomePage />
    </Web3ModalProvider>
  );
};

export default App;
