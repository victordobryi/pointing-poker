import React from "react";
import { Box, Flex, Spacer, Image } from "@chakra-ui/react";

const OneScore = ({ member }) => {
  const { score, id } = member;

  return (
    <Box w={150} h={75} boxShadow="dark-lg" rounded="md" p="6px" m="5px">
      <Flex align="center" justify="center" h="100%">
        <Box fontSize={25} fontWeight="bold" h={50}>
          {score === "" ? "in progress" : score}
        </Box>
      </Flex>
    </Box>
  );
};

export default OneScore;
