import { VStack, Flex } from "@chakra-ui/react";
import Issues from "../components/issues/Issues";
import "../App";
import { UserNavGame } from "../components/userNavigation/userNavigationGame";

import { RoundControl } from "../components/roundControl/RoundControl";
import { ScoreTable } from "../components/score/ScoreTable";
import { MainLayout } from "../components/mainLayout/mainLayout";

function GameMasterPage() {
  return (
    <MainLayout>
      <Flex h="86%" direction="row" justify="center" align="flex-start" mb={15}>
        <VStack
          w="70%"
          borderColor="grey.100"
          borderWidth={2}
          borderBottom="none"
          borderTop="none"
          borderLeft="none"
        >
          <UserNavGame />
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
    </MainLayout>
  );
}

export default GameMasterPage;
