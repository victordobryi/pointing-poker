import React from "react";
import { Box, Heading, CloseButton, Flex } from "@chakra-ui/react";

const OneIssue = ({ num, index }) => {
  let isCurrent = index === 0 ? true : false;

  return (
    <Box w={300} h={75} boxShadow="dark-lg" rounded="md" p="10px" m="5px">
      <Flex direction="row" align="start" justify="space-between">
        <Flex direction="column" align="flex-start">
          {isCurrent === true ? (
            <Heading as="h6" size="xs">
              CURRENT
            </Heading>
          ) : (
            <></>
          )}
          <Heading size="md" textAlign="right" mb="50px">
            Issue {num}
          </Heading>
        </Flex>
        <CloseButton size="md"></CloseButton>
      </Flex>
    </Box>
  );
};

export default OneIssue;
