import { ChakraProvider } from '@chakra-ui/react';
import { MainPage } from './pages/main-page/main-page';

export const App = () => {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  );
};
