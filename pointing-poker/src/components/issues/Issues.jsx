import React, { useState, useContext, useEffect } from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import IssueItem from './IssueItem';
import AddIssue from './AddIssues';
import NoIssuesCard from './NoIssuesCard';
import { ReviseIssueModal } from '../modals/ReviseIssueModal';
import { Modal } from '../modal/modal';
import { MainContext } from '../../contexts/mainContext';
import { IssuesContext } from '../../contexts/issuesContext';
import { SocketContext } from '../../contexts/socketContext';

const EMPTYISSUE = {
  id: '',
  name: '',
  link: '',
  priority: ''
}

const Issues = () => {
  const [modalActive, setModalActive] = useState(false);
  const [currentIssue, setCurrentIssue] = useState('');
  const [isNewIssue, setIsNewIssue] = useState(false);
  const { room } = useContext(MainContext);
  const { issues, setIssues } = useContext(IssuesContext);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on('issues', issues => {
      setIssues(issues);
    });
  })

  const handleDelClick = (id) => {
    const deletedId = id;
    socket.emit('deleteIssue', deletedId, (deletedId) => {
      console.log(`Issue with id ${deletedId} deleted`);
    });
  }

  const handleReviseClick = (issue) => {
    setModalActive(true);
    setCurrentIssue(issue);
  };

  const handleAddIssueClick = () => {
    setCurrentIssue(EMPTYISSUE);
    setIsNewIssue(true);
    setModalActive(true);
  };

  const handleCloseClick = () => {
    setCurrentIssue(EMPTYISSUE);
    setModalActive(false);
  };

  const handleRevise = () => {
    if (isNewIssue) {
      socket.emit('addIssue', { currentIssue, room }, error => {
        if (error) {
          console.log(error);
        } else console.log(`${currentIssue.name} is added to ${room} room`);
      });

      setIsNewIssue(false);

    } else {
      socket.emit('updateIssues', { currentIssue, room }, error => {
        if (error) {
          console.log(error);
        } else console.log(`Issues succesfully update`);
      });
    };
  };

  return (
    <Box maxW='1200px' mt='20px'>
      <Heading as='h5' size='lg' textAlign='center' mb='30px'>
        Issues:
      </Heading>
      <Flex maxW='1200px' wrap='wrap'>
        {issues.length ? (
          issues.map((item) => (
            <IssueItem
              key={item.id}
              issue={item}
              deleteClick={handleDelClick}
              revise={handleReviseClick}
            />
          ))
        ) : (
          <NoIssuesCard />
        )}
        <AddIssue addClick={handleAddIssueClick} />
      </Flex >
      <Modal active={modalActive} setActive={setModalActive}>
        <ReviseIssueModal
          issue={currentIssue}
          setCurrentIssue={setCurrentIssue}
          onClose={handleCloseClick}
          onRevise={handleRevise}
        />
      </Modal>
    </Box >
  );
};

export default Issues;
