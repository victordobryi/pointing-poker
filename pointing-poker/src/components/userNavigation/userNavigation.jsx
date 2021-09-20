import { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text
} from '@chakra-ui/react';
import OneMember from '../members/OneMember';
import { UsersContext } from '../../contexts/usersContext';
import { SocketContext } from '../../contexts/socketContext';
import { MainContext } from '../../contexts/mainContext';
import { IssuesListLine } from './IssuesListLine';

export const UserNav = () => {
  const history = useHistory();
  const { users } = useContext(UsersContext);
  const master = users.filter((user) => user.isMaster === true)[0];
  const socket = useContext(SocketContext);
  const { room } = useContext(MainContext);
  const { minutes, seconds } = useSelector((state) => state.timer);

  const handleCopy = () => {
    const copyText = document.getElementById('URL-Input');
    copyText.select();
    document.execCommand('copy');
    alert('Copied the text: ' + copyText.value);
  };

  const handleStartGame = () => {
    const currentCount = Number(minutes * 60 + Number(seconds));
    socket.emit('addTimer', { currentCount, room });
    history.push('/game-master');
  };

  return (
    <Fragment>
      <IssuesListLine/>
      <Box>
        <Text fontSize='16px'>Scram master:</Text>
        <OneMember member={master} />
      </Box>
      <Box mt='10px' mb='20px'>
        <FormControl>
          <FormLabel>Link to lobby:</FormLabel>
          <Flex>
            <Input
              w={276}
              h={47}
              value={master ? master.room : ''}
              id='URL-Input'
            ></Input>
            <Button
              w={189}
              h={47}
              colorScheme={'facebook'}
              onClick={handleCopy}
            >
              Copy
            </Button>
          </Flex>
        </FormControl>
      </Box>
      <Flex justifyContent={'space-between'} maxW='464px'>
        <Button onClick={handleStartGame} colorScheme={'facebook'}>
          Start Game
        </Button>
        <Button variant={'outline'} colorScheme={'facebook'}>
          Cancel game
        </Button>
      </Flex>
    </Fragment>
  );
};
