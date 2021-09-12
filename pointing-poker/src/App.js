import { Provider } from 'react-redux';
import { store } from './store';
import { ChakraProvider } from '@chakra-ui/react';
import { MainPage } from './pages/main-page/main-page';

export const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <MainPage />
      </ChakraProvider>
    </Provider>
  );
};
