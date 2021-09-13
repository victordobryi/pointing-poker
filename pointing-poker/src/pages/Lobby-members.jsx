import React, { Fragment } from 'react';
import Members from '../components/members/Members';
import { MainLayout } from '../components/mainLayout/mainLayout';
import { Image, Flex, Box, Button, Heading, Text } from '@chakra-ui/react';
import draw from '../assets/icons/draw.png';
import OneMember from '../components/members/OneMember';
// import Avatar3 from '../assets/icons/Avatar3.jpg';
import { useSelector } from 'react-redux';

const issuesNumbers = [13, 19, 322, 533, 666, 245, 900, 400, 3232, 455656];

// const master = {
//   id: 'admin',
//   fullName: 'Rick Giligan',
//   jobPosition: 'lead softwear engeneer',
//   imageSrc: Avatar3
// };

const LobbyMembersPage = () => {
  const user = useSelector((state) => state.user);
  const members = user.users.filter((member) => member.isMaster !== true);
  return (
    <MainLayout>
      <Fragment>
        <Flex
          maxW="1200px"
          justifyContent={'center'}
          fontSize="24px"
          fontWeight="bold"
          mt="20px"
        >
          <Heading as="h5" size="md" textAlign="right" mb="50px">
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
        </Flex>
        <Box>
          <Text fontSize="16px">Scram master:</Text>
          {members.forEach((member) => {
            <OneMember member={member} />;
          })}
        </Box>
        <Flex justifyContent={'end'} maxW="1000px">
          <Button variant={'outline'} colorScheme={'facebook'} w="160px">
            Exit
          </Button>
        </Flex>
      </Fragment>
      <Members />
    </MainLayout>
  );
};

export default LobbyMembersPage;
