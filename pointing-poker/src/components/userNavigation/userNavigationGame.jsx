import React, { useContext } from 'react';
import { Flex, Box, Button, Spacer, Heading, Text } from '@chakra-ui/react';
import OneMember from '../members/OneMember';
import Avatar3 from '../../assets/icons/Avatar3.jpg';
import { UsersContext } from '../../contexts/usersContext';
import { useHistory } from 'react-router';

const issuesNumbers = [13, 19, 322, 533, 666, 245, 900, 400, 3232, 455656];

export const UserNavGame = () => {
  const history = useHistory();

  const { users } = useContext(UsersContext);
  const master = users.filter((user) => user.isMaster === true)[0];

  const handleStopClick = () => {
    history.push('/game-result');
  };
  return (
    <>
      <Flex justifyContent={'center'} w="80%">
        <Heading size="md" mt={25} mb={25}>
          Spring 23 planning (issues {''}
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
          <Text fontSize="16px">Scram master:</Text>
          <OneMember member={master} />
        </Box>
        <Spacer />
        <Button
          variant={'outline'}
          colorScheme={'facebook'}
          onClick={() => handleStopClick()}
        >
          Stop game
        </Button>
      </Flex>
    </>
  );
};
