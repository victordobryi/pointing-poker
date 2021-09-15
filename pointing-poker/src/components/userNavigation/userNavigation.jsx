import { Fragment } from "react";
import {
  Image,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import draw from "../../assets/icons/draw.png";
import OneMember from "../members/OneMember";
import Avatar3 from "../../assets/icons/Avatar3.jpg";

const issuesNumbers = [13, 19, 322, 533, 666, 245, 900, 400, 3232, 455656];

const master = {
  id: "admin",
  firstName: "Rick",
  lastName: " Giligan",
  position: "lead softwear engeneer",
  image: Avatar3,
};

const handleOnClickStart = () => {
  window.location.assign("/game-master");
};

export const UserNav = () => {
  return (
    <Fragment>
      <Flex
        maxW="1200px"
        justifyContent={"center"}
        fontSize="24px"
        fontWeight="bold"
        mt="20px"
      >
        <Heading as="h5" size="md" textAlign="right" mb="50px">
          Spring 23 planning (issues {""}
          {issuesNumbers.map((issue, index) =>
            issuesNumbers.length > index + 1 ? (
              <span key={index}>{issue}, </span>
            ) : (
              <span key={index}>{issue} </span>
            )
          )}
          )
          <Image src={draw} alt="draw" boxSize="22px" display="inline-block" />
        </Heading>
      </Flex>
      <Box>
        <Text fontSize="16px">Scram master:</Text>
        <OneMember member={master} />
      </Box>
      <Box mt="10px" mb="20px">
        <FormControl>
          <FormLabel>Link to lobby:</FormLabel>
          <Flex>
            <Input w={276} h={47}></Input>
            <Button w={189} h={47} colorScheme={"facebook"}>
              Copy
            </Button>
          </Flex>
        </FormControl>
      </Box>
      <Flex justifyContent={"space-between"} maxW="464px">
        <Button colorScheme={"facebook"} onClick={() => handleOnClickStart()}>
          Start Game
        </Button>
        <Button variant={"outline"} colorScheme={"facebook"}>
          Cancel game
        </Button>
      </Flex>
    </Fragment>
  );
};
