import { VStack, HStack, StackDivider } from "@chakra-ui/react";
import Issues from "./components/issues/Issues";
import "./App.css";
import { MasterPanel } from "./components/userNavigation/MasterPanel";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HStack>
        <VStack
          w="70%"
          borderColor="grey.100"
          borderWidth={2}
          borderBottom="none"
          borderTop="none"
          borderLeft="none"
        >
          <MasterPanel />
          <Issues />
        </VStack>
        <VStack></VStack>
      </HStack>
      <Footer />
    </>
  );
}

export default App;
