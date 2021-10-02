import React, { useState, useContext } from 'react';
import { Flex, Button, Spacer } from '@chakra-ui/react';
import Timer from '../timer/Timer';
import { SocketContext } from '../../contexts/socketContext';
import { MainContext } from '../../contexts/mainContext';
import { useSelector } from 'react-redux';

export const RoundControl = () => {
  const { settings } = useContext(MainContext);
  const initCount = Number(settings.minutes * 60 + Number(settings.seconds));
  const [status, setStatus] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(initCount);
  const socket = useContext(SocketContext);
  const { room } = useContext(MainContext);
  const user = useSelector((state) => state.user);

  socket.on('getTimerStatus', ({ currentStatus }) => {
    setStatus(currentStatus);
    currentStatus !== 'stopped'
      ? setSecondsRemaining(initCount)
      : setSecondsRemaining(0);
  });
  const handleOnclickRun = () => {
    socket.emit('setTimerStatus', true, room);
  };

  const handleOnclickRestart = () => {
    socket.emit('setRestart', true, room);
    socket.emit('setTimerStatus', true, room);
    setSecondsRemaining(initCount);
  };
  return (
    <Flex mb="20px" direction="column" justify="center" align="center">
      {settings.isTimer ? (
        <Timer
          setStatus={setStatus}
          status={status}
          setSecondsRemaining={setSecondsRemaining}
          secondsRemaining={secondsRemaining}
          initCount={initCount}
        />
      ) : null}

      {user.isMaster ? (
        <div>
          <Button
            colorScheme={'facebook'}
            w="160px"
            m={5}
            onClick={handleOnclickRun}
          >
            Run Round
          </Button>
          <Spacer />
          <Button
            colorScheme={'facebook'}
            w="160px"
            m={5}
            onClick={handleOnclickRestart}
          >
            Restart Round
          </Button>
        </div>
      ) : null}
    </Flex>
  );
};
