import React from "react";
import { VStack, Flex, Heading } from "@chakra-ui/react";
import Players from "../score/Players";

export const ScoreTable = () => {
  return (
    <Flex direction="column" w="90%" justify="flex-start" align="center">
      <Flex direction="row" w="90%" justify="space-between" align="center">
        <Heading as="h5" size="lg" textAlign="center" mb="30px">
          Score:
        </Heading>
        <Heading as="h5" size="lg" textAlign="center" mb="30px">
          Players:
        </Heading>
      </Flex>
      <VStack>
        <Players />
      </VStack>
    </Flex>
  );
};
