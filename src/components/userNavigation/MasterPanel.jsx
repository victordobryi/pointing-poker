import { Flex, Box, Button, Spacer, Heading } from "@chakra-ui/react";
import OneMember from "../members/OneMember";

const issuesNumbers = [13, 19, 322, 533, 666, 245, 900, 400, 3232, 455656];

export const MasterPanel = () => {
  return (
    <>
      <Flex justifyContent={"center"} w="80%">
        <Heading size="md" mt={25} mb={25}>
          Spring 23 planning (issues {""}
          {issuesNumbers.map((issue, index) =>
            issuesNumbers.length > index + 1 ? (
              <span key={index}>{issue}, </span>
            ) : (
              <span key={index}>{issue} </span>
            )
          )}
          )
        </Heading>
      </Flex>
      <Flex w="90%" justify="space-between" alignItems="center">
        <Box>
          <h3>Scram master:</h3>
          <OneMember
            position={"lead softwear engeneer"}
            name={"Rick Giligan"}
            notDelete={"true"}
          />
        </Box>
        <Spacer />
        <Button variant={"outline"} colorScheme={"facebook"}>
          Stop game
        </Button>
      </Flex>
    </>
  );
};
