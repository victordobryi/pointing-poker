import React from 'react';
import { Text, Flex } from "@chakra-ui/react";

export const YouAreDeletedModal = () => {
  return (
    <Flex
      minH='100px'
      justify='center'
      alignItems='center'
    >
      <Text
        fontSize='30px'
        fontWeight='800'
        align='center'
      >
        You are removed from the session
      </Text>
    </Flex>
  );
};
