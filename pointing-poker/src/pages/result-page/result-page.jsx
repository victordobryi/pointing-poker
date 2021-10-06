import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MainLayout } from '../../components/mainLayout/mainLayout';
import { Flex, Button } from '@chakra-ui/react';
import { SocketContext } from '../../contexts/socketContext';
import { IssuesContext } from '../../contexts/issuesContext';
import { MainContext } from '../../contexts/mainContext';

import IssueItem from '../../components/issues/IssueItem';
import NoIssuesCard from '../../components/issues/NoIssuesCard';
import { IssuesListLine } from '../../components/userNavigation/IssuesListLine';
import GameCard from '../../components/cards/GameCard';
import { Modal } from '../../components/modal/modal';
import { YouAreDeletedModal } from '../../components/modals/YouAreDeletedModal';
import { Statistics } from '../../components/statistics/Statistics';
import cup from '../../assets/icons/Cup.png';
import J from '../../assets/icons/J.png';
import Q from '../../assets/icons/Q.png';
import K from '../../assets/icons/K.png';
import A from '../../assets/icons/A.png';

const fibonacciCards = ['0', '1', '2', '3', '5', '8', cup];

const TshirtsCards = ['XS', 'S', 'M', 'L', 'XL', cup];

const PlayingCards = ['6', '7', J, Q, K, A, cup];

export const ResultPage = () => {
  const [modalActive, setModalActive] = useState(false);
  const { issues, setIssues } = useContext(IssuesContext);
  const { settings } = useContext(MainContext);
  const [isSession, setIsSession] = useState(true);
  const socket = useContext(SocketContext);
  const history = useHistory();
  const [isRestarted, setIsRestarted] = useState(false);
  console.log('s');

  let cards =
    settings.scoreType === 'FN'
      ? fibonacciCards
      : settings.scoreType === 'TS'
      ? TshirtsCards
      : settings.scoreType === 'PC'
      ? PlayingCards
      : PlayingCards;

  const modalShowFunc = () => {
    setModalActive(true);
    setTimeout(() => {
      setModalActive(false);
      history.push('/');
    }, 3000);
  };

  const handleExitClick = () => {
    socket.emit('leaveSession', socket.id);
    modalShowFunc();
  };

  useEffect(() => {
    socket.on('endOfSession', () => {
      setIsSession(false);
      modalShowFunc();
    });
  }, []);

  return (
    <MainLayout>
      <Flex direction="column" justify="space-around" h="100%">
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <IssuesListLine />
          <Button
            variant={'outline'}
            colorScheme={'facebook'}
            w="160px"
            onClick={handleExitClick}
          >
            Leave session
          </Button>
        </Flex>

        <Flex justify="space-around" h="100%">
          <Flex direction="column" justify="space-around">
            <Flex maxW="1200px" wrap="wrap">
              {issues.length ? (
                issues.map((item) => <IssueItem key={item.id} issue={item} />)
              ) : (
                <NoIssuesCard />
              )}
            </Flex>
            <Flex minW="50%" paddingTop="50px">
              <Statistics />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Modal active={modalActive} setActive={setModalActive}>
        <YouAreDeletedModal isSession={isSession} />
      </Modal>
    </MainLayout>
  );
};
