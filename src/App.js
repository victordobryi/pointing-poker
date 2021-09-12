import { VStack, Flex, Box } from "@chakra-ui/react";
import Issues from "./components/issues/Issues";
import "./App.css";
import { MasterPanel } from "./components/userNavigation/MasterPanel";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { RoundControl } from "./components/roundControl/RoundControl";
import { ScoreTable } from "./components/score/ScoreTable";

function App() {
  return (
    <Box h="100vh">
      <Header />
      <Flex h="85%" direction="row" justify="center" align="flex-start">
        <VStack
          w="70%"
          borderColor="grey.100"
          borderWidth={2}
          borderBottom="none"
          borderTop="none"
          borderLeft="none"
        >
          <MasterPanel />
          <Flex
            w="90%"
            direction="row"
            justify="space-between"
            align="flex-start"
          >
            <Issues />
            <RoundControl mt={85} />
          </Flex>
        </VStack>
        <Flex w="40%" direction="column" justify="flex-start" align="center">
          <ScoreTable />
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}

export default App;
