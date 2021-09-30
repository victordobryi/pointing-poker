import React, { useContext, useState } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
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
        <Box
          fontSize={25}
          fontWeight="bold"
          h={50}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {timerStatus !== 'stopped' && member.isMaster === false ? (
            'in progress'
          ) : score.length < 10 ? (
            <Box fontSize={40} fontWeight="bold">
              {score}
            </Box>
          ) : (
            <Image
              src={score}
              alt="Card-image"
              boxSize="60px"
              objectFit="cover"
            />
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default OneScore;
