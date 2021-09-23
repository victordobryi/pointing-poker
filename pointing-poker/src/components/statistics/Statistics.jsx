import { Box, Flex } from '@chakra-ui/layout';

export const Statisctics = () => {
  return (
    <Flex direction="column" minW="100%">
      <h2>Statistics:</h2>
      <Flex justify="space-between">
        <Box w="75px" h="100px" border="1px solid" />
        <Box w="75px" h="100px" border="1px solid" />
        <Box w="75px" h="100px" border="1px solid" />
        <Box w="75px" h="100px" border="1px solid" />
      </Flex>
    </Flex>
  );
};
