import { VStack } from "@chakra-ui/react";
import Members from "./components/members/Members";
import Issues from "./components/issues/Issues";
import "./App.css";
import { UserNav } from "./components/userNavigation/userNavigation";

function App() {
  return (
    <VStack
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
    >
      <UserNav />
      <Members />
      <Issues />
    </VStack>
  );
}

export default App;
