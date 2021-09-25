import React, { useContext, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { SocketContext } from '../../contexts/socketContext';

const OneScore = ({ member }) => {
  const { score, id } = member;
  const [timerStatus, setTimerStatus] = useState(false);
  const socket = useContext(SocketContext);
  socket.on('getTimerStatus', ({ currentStatus }) => {
    setTimerStatus(currentStatus);
  });
  return (
    <Box
      w={150}
      h={75}
      boxShadow="dark-lg"
      rounded="md"
      p="6px"
      m="5px"
      key={id}
    >
      <Flex align="center" justify="center" h="100%">
        <Box fontSize={25} fontWeight="bold" h={50}>
          {timerStatus !== 'stopped' ? 'in progress' : score}
        </Box>
      </Flex>
    </Box>
  );
};

export default OneScore;
