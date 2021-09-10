import { ChakraProvider } from '@chakra-ui/react';
import { ResultPage } from './pages/result-page/result-page';
function App() {
  return (
    <ChakraProvider>
      <ResultPage />
    </ChakraProvider>
  );
}

export default App;
