import { Fragment } from 'react';
import {
  Img,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';
import draw from '../../assets/icons/draw.png';
import OneMember from '../members/OneMember';
const issuesNumbers = [13, 19, 322, 533, 666, 245, 900, 400, 3232, 455656];

export const UserNav = () => {
  return (
    <Fragment>
      <Flex justifyContent={'center'}>
        Spring 23 planning (issues {''}
        {issuesNumbers.map((issue, index) =>
          issuesNumbers.length > index + 1 ? (
            <span key={index}>{issue}, </span>
          ) : (
            <span key={index}>{issue} </span>
          )
        )}
        )<Img src={draw}></Img>
      </Flex>
      <Box>
        <h3>Scram master:</h3>
        <OneMember position={'lead softwear engeneer'} name={'Rick Giligan'} />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Link to lobby:</FormLabel>
          <Flex>
            <Input w={276} h={47}></Input>
            <Button w={189} h={47} colorScheme={'facebook'}>
              Copy
            </Button>
          </Flex>
        </FormControl>
      </Box>
      <Flex justifyContent={'space-between'}>
        <Button colorScheme={'facebook'}>Start Game</Button>
        <Button variant={'outline'} colorScheme={'facebook'}>
          Cancel game
        </Button>
      </Flex>
    </Fragment>
  );
};
