import React, { useContext } from 'react';
import { Flex, Box, Button, Spacer, Heading, Text } from '@chakra-ui/react';
import OneMember from '../members/OneMember';
import Avatar3 from '../../assets/icons/Avatar3.jpg';
import { UsersContext } from '../../contexts/usersContext';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { MainContext } from '../../contexts/mainContext';
import { SocketContext } from '../../contexts/socketContext';

const issuesNumbers = [13, 19, 322, 533, 666, 245, 900, 400, 3232, 455656];

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
