import { Fragment, useContext } from 'react';
import {
  Image,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text
} from '@chakra-ui/react';
import draw from '../../assets/icons/draw.png';
import OneMember from '../members/OneMember';
import { UsersContext } from '../../contexts/usersContext';

const issuesNumbers = [13, 19, 322, 533, 666, 245, 900, 400, 3232, 455656];

export const UserNav = () => {
  const { users } = useContext(UsersContext);
  const master = users.filter((user) => user.isMaster === true)[0];
  console.log('master', master)

  const handleCopy = () => {
    const copyText = document.getElementById("URL-Input");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

  return (
    <Fragment>
      <Flex maxW="1200px" justifyContent={'center'} fontSize="24px" fontWeight="bold" mt="20px">
        <Heading as="h5" size="md" textAlign="right" mb="50px" >
          Spring 23 planning (issues {''}
          {issuesNumbers.map((issue, index) =>
            issuesNumbers.length > index + 1 ? (
              <span key={index}>{issue}, </span>
            ) : (
              <span key={index}>{issue} </span>
            )
          )})
          <Image src={draw} alt="draw" boxSize="22px" display="inline-block" />
        </Heading>
      </Flex>
      <Box >
        <Text fontSize="16px">Scram master:</Text>
        <OneMember member={master} />
      </Box>
      <Box mt="10px" mb="20px">
        <FormControl>
          <FormLabel>Link to lobby:</FormLabel>
          <Flex>
            <Input w={276} h={47} value={master ? master.room : ''} id="URL-Input"></Input>
            <Button w={189} h={47} colorScheme={'facebook'} onClick={handleCopy}>
              Copy
            </Button>
          </Flex>
        </FormControl>
      </Box>
      <Flex justifyContent={'space-between'} maxW="464px">
        <Button colorScheme={'facebook'}>Start Game</Button>
        <Button variant={'outline'} colorScheme={'facebook'}>
          Cancel game
        </Button>
      </Flex>
    </Fragment>
  );
};
