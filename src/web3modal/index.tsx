import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { WagmiProvider } from 'wagmi';
import { bscTestnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useMemo } from 'react';

// Congela el prototipo de Object para prevenir modificaciones maliciosas
Object.freeze(Object.prototype);

// Configuración de QueryClient
const queryClient = new QueryClient();

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

// Definir las cadenas a usar
const chains = [bscTestnet] as const;

// Metadata del proyecto
const metadata = {
  name: 'AdBull Próximamente...',
  description: 'A decentralized AdBull mini app',
  url: 'https://oleags.github.io/MiniApp/', // origin debe coincidir con tu dominio y subdominio
  icons: ['https://oleags.github.io/MiniApp/bnb_icon.png'],
};

// Configuración de wagmi con la cadena y metadatos
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// Creación del modal de Web3
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Opcional - por defecto según tu configuración en Cloud
  enableOnramp: true, // Opcional - false por defecto
});

export function Web3ModalProvider({ children }: { children: ReactNode }) {
  console.log("Web3ModalProvider rendered");

  // Memoriza las configuraciones para evitar renders innecesarios
  const memoizedConfig = useMemo(() => config, []);
  const memoizedQueryClient = useMemo(() => queryClient, []);

  return (
    <WagmiProvider config={memoizedConfig}>
      <QueryClientProvider client={memoizedQueryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
