import { VStack } from "@chakra-ui/react";
import Issues from "./components/issues/Issues";
import "./App.css";
import { MasterPanel } from "./components/userNavigation/MasterPanel";
import { Header } from "./components/Header";

function App() {
  return (
    <VStack w="100%">
      <Header />
      <MasterPanel />
      <Issues />
    </VStack>
  );
}

export default App;
