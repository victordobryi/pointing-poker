import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Members from '../components/members/Members';
import { MainLayout } from '../components/mainLayout/mainLayout';
import { IssuesContext } from '../contexts/issuesContext';
import { UsersContext } from '../contexts/usersContext';
import { SocketContext } from '../contexts/socketContext';
import {Modal} from '../components/modal/modal';
import {YouAreDeletedModal} from '../components/modals/YouAreDeletedModal';
import {
  Flex,
  Box,
  Button,
  Text
} from '@chakra-ui/react';
import OneMember from '../components/members/OneMember';
import { IssuesListLine } from '../components/userNavigation/IssuesListLine';

const LobbyMembersPage = () => {
  const [modalActive, setModalActive] = useState(false);
  const { users } = useContext(UsersContext);
  const master = users.filter((user) => user.isMaster === true)[0];
  const socket = useContext(SocketContext);
  const history = useHistory();
  const { setIssues } = useContext(IssuesContext);

  socket.on('issues', issues => {
    setIssues(issues);
  });

  socket.on('userIsDeleted', () => {
    modalShowFunc();
  });

  const handleExitClick = () => {
    socket.emit('leaveSession', socket.id);
    modalShowFunc();
  }

  const modalShowFunc = () => {
    setModalActive(true);
    setTimeout(()=>{
      setModalActive(false);
      history.push('/');
    }, 3000);
  }

  return (
    <MainLayout>
      <Fragment>
        <IssuesListLine/>
        <Box>
          <Text fontSize='16px'>Scram master:</Text>
          <OneMember member={master} />
        </Box>
        <Flex justifyContent={'end'} maxW='1000px'>
          <Button 
            variant={'outline'} 
            colorScheme={'facebook'}
            w='160px'
            onClick={handleExitClick}
          >
            Exit
          </Button>
        </Flex>
      </Fragment>
      <Members />
      <Modal active={modalActive} setActive={setModalActive}>
        <YouAreDeletedModal/>
      </Modal>
    </MainLayout>
  );
};

export default LobbyMembersPage;
