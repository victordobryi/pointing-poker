import React, { useState, useContext } from 'react';
import { Flex, Button, Spacer } from '@chakra-ui/react';
import Timer from '../timer/Timer';
import { SocketContext } from '../../contexts/socketContext';
import { MainContext } from '../../contexts/mainContext';
import { useSelector } from 'react-redux';

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped'
};

export const RoundControl = () => {
  const [initCount, setInitCount] = useState(0);
  const [status, setStatus] = useState(STATUS.STOPPED);
  const [secondsRemaining, setSecondsRemaining] = useState(initCount);
  const socket = useContext(SocketContext);
  const { room } = useContext(MainContext);
  const user = useSelector((state) => state.user);

  socket.on('timers', ({ currentCount }) => {
    setInitCount(currentCount);
  });

  const handleOnclickRun = () => {
    setSecondsRemaining(initCount);
    setStatus(STATUS.STARTED);
  };

  const handleOnclickRestart = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(initCount);
    setStatus(STATUS.STARTED);
  };
  return (
    <Flex mb="20px" direction="column" justify="center" align="center">
      <Timer
        setStatus={setStatus}
        status={status}
        setSecondsRemaining={setSecondsRemaining}
        secondsRemaining={secondsRemaining}
        initCount={initCount}
      />
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
