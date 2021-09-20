import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Members from '../components/members/Members';
import { MainLayout } from '../components/mainLayout/mainLayout';
import { IssuesContext } from '../contexts/issuesContext';
import { UsersContext } from '../contexts/usersContext';
import { SocketContext } from '../contexts/socketContext';
import {
  Flex,
  Box,
  Button,
  Text
} from '@chakra-ui/react';
import OneMember from '../components/members/OneMember';
import { IssuesListLine } from '../components/userNavigation/IssuesListLine';

const LobbyMembersPage = () => {
  const { users } = useContext(UsersContext);
  const master = users.filter((user) => user.isMaster === true)[0];
  const socket = useContext(SocketContext);
  const history = useHistory();
  const { issues, setIssues } = useContext(IssuesContext);

  socket.on('issues', issues => {
    setIssues(issues);
  });

  socket.on('userIsDeleted', () => {
    alert('You are removed from the session');
    setTimeout(()=>{
      history.push('/');
    }, 3000);
  });

  return (
    <MainLayout>
      <Fragment>
        {/* <Flex maxW="1200px" justifyContent={'center'} fontSize="24px" fontWeight="bold" mt="20px">
          <Heading as="h5" size="md" textAlign="right" mb="50px" >
            Spring 23 planning (issues {''}
            {issuesNumbers.map((issue, index) =>
              issuesNumbers.length > index + 1 ? (
                <span key={index}>{issue}, </span>
              ) : (
                <span key={index}>{issue} </span>
              )
            )}
            )
            <Image
              src={draw}
              alt="draw"
              boxSize="22px"
              display="inline-block"
            />
          </Heading>
        </Flex> */}
        <IssuesListLine/>
        <Box>
          <Text fontSize="16px">Scram master:</Text>
          <OneMember member={master} />
        </Box>
        <Flex justifyContent={"end"} maxW="1000px">
          <Button variant={"outline"} colorScheme={"facebook"} w="160px">
            Exit
          </Button>
        </Flex>
      </Fragment>
      <Box mb="20px">
        <Members />
      </Box>
    </MainLayout>
  );
};

export default LobbyMembersPage;
