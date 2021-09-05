import { ChakraProvider } from '@chakra-ui/react';
import { MainPage } from './components/main-page/main-page';

export const App = () => {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  );
};
