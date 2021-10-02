import React, { useContext, useState } from 'react';
import { VStack, Flex } from '@chakra-ui/react';
import Issues from '../components/issues/Issues';
import '../App';
import { UserNavGame } from '../components/userNavigation/userNavigationGame';

import { RoundControl } from '../components/roundControl/RoundControl';
import { ScoreTable } from '../components/score/ScoreTable';
import { MainLayout } from '../components/mainLayout/mainLayout';

import GameCard from '../components/cards/GameCard';
import cup from '../assets/icons/Cup.png';
import J from '../assets/icons/J.png';
import Q from '../assets/icons/Q.png';
import K from '../assets/icons/K.png';
import A from '../assets/icons/A.png';
import { useSelector } from 'react-redux';
import { Statisctics } from '../components/statistics/Statistics';
import { SocketContext } from '../contexts/socketContext';
import { MainContext } from '../contexts/mainContext';

const fibonacciCards = ['0', '1', '2', '3', '5', '8', cup];

const TshirtsCards = ['XS', 'S', 'M', 'L', 'XL', cup];

const PlayingCards = ['6', '7', J, Q, K, A, cup];

function GameMasterPage() {
  const [timerStatus, setTimerStatus] = useState(false);
  const [isRestarted, setIsRestarted] = useState(false);
  const socket = useContext(SocketContext);
  const { room } = useContext(MainContext);

  const { settings } = useContext(MainContext);

  socket.on('getTimerStatus', ({ currentStatus }) => {
    setTimerStatus(currentStatus);
  });

  const image = '';
  socket.on('restarted', (status) => {
    setIsRestarted(status);
    socket.emit('editUser', { room, image });
  });

  const user = useSelector((state) => state.user);

  let cards =
    settings.scoreType === 'FN'
      ? fibonacciCards
      : settings.scoreType === 'TS'
      ? TshirtsCards
      : settings.scoreType === 'PC'
      ? PlayingCards
      : PlayingCards;

  return (
    <MainLayout>
      <Flex
        h="86%"
        direction="row"
        justify="center"
        align="flex-start"
        mb={150}
      >
        <VStack
          w="70%"
          borderColor="grey.100"
          borderWidth={2}
          borderBottom="none"
          borderTop="none"
          borderLeft="none"
        >
          <UserNavGame />
          <Flex
            w="90%"
            direction="row"
            justify="space-between"
            align="flex-start"
          >
            <Issues />
            <RoundControl mt={85} />
          </Flex>
          <Flex
            w="90%"
            direction="row"
            justify="space-between"
            align="flex-start"
            className={
              timerStatus === true ||
              !settings.isTimer ||
              (timerStatus === 'stopped' && settings.isChanging)
                ? 'active'
                : 'inActive'
            }
          >
            {!user.isObserver && !user.isMaster
              ? cards.map((card) => (
                  <GameCard
                    key={card}
                    scoreType={settings.scoreType}
                    image={card}
                    isRestarted={isRestarted}
                  />
                ))
              : null}
          </Flex>
          {timerStatus === 'stopped' || !settings.isTimer ? (
            <Flex minW="50%" paddingTop="50px">
              <Statisctics />
            </Flex>
          ) : null}
        </VStack>
        <Flex w="40%" direction="column" justify="flex-start" align="center">
          <ScoreTable />
        </Flex>
      </Flex>
    </MainLayout>
  );
}

export default GameMasterPage;
