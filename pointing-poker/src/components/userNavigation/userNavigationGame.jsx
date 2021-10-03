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
  const user = useSelector((state) => state.user);
  const socket = useContext(SocketContext);
  const { room } = useContext(MainContext);

  const handleStopClick = () => {
    const link = '/game-result';
    socket.emit('changePage', { link, room });
    history.push(link);
  };

  const handleExitGame = () => {
    history.push('/');
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
          onClick={
            user.isMaster ? () => handleStopClick() : () => handleExitGame()
          }
        >
          {user.isMaster ? 'Stop game' : 'Exit game'}
        </Button>
      </Flex>
    </>
  );
};
