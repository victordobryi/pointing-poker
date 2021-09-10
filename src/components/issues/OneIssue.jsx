import React from "react";
import { Heading, CloseButton, Flex, Spacer, Box } from "@chakra-ui/react";

const OneIssue = ({ num, index }) => {
  let isCurrent = index === 0 ? true : false;

  return (
    <Box w={300} h={75} boxShadow="dark-lg" rounded="md" p="10px" m="25px">
      <Flex direction="row" align="center" justify="space-between" h="100%">
        <Flex direction="column" align="flex-start" justify="center">
          {isCurrent === true ? (
            <Heading as="h6" size="xs">
              CURRENT
            </Heading>
          ) : (
            <></>
          )}
          <Heading size="lg" textAlign="right">
            Issue {num}
          </Heading>
        </Flex>
        <Spacer />
        <CloseButton size="md"></CloseButton>
      </Flex>
    </Box>
  );
};

export default OneIssue;
