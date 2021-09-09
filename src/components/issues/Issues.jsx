import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import OneIssue from "./OneIssue";

const issuesNumbers = [13, 19, 322, 533, 666, 245, 900, 400, 3232, 455656];

const Issues = () => {
  return (
    <Box maxW="550px" ml="360px" mr="36px">
      <Heading as="h5" size="lg" textAlign="right" mb="50px">
        Issues:
      </Heading>
      {issuesNumbers.map(({ number }, index) => (
        <OneIssue number={number} index={index} />
      ))}
    </Box>
  );
};

export default Issues;
