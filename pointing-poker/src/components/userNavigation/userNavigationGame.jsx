import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Flex, Box, Button, Spacer, Text } from '@chakra-ui/react';
import OneMember from '../members/OneMember';
import { IssuesListLine } from './IssuesListLine';
import { UsersContext } from '../../contexts/usersContext';

export const UserNavGame = () => {
  const history = useHistory();

  const { users } = useContext(UsersContext);
  const master = users.filter((user) => user.isMaster === true)[0];

  const handleStopClick = () => {
    history.push('/game-result');
  };
  return (
    <>
      <Flex justifyContent={'center'} w='80%'>
        <IssuesListLine />
      </Flex>
      <Flex w='90%' justify='space-between' alignItems='center'>
        <Box>
          <Text fontSize='16px'>Scram master:</Text>
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
