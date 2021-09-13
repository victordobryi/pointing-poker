import React, { useState } from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import OneMember from './OneMember';
import NoMembersCard from './NoMembersCard';
import { Modal } from '../modal/modal';
import { KickPlayerModal } from '../modals/KickPlayerModal';
// import Avatar1 from '../../assets/icons/Avatar1.png';
// import Avatar2 from '../../assets/icons/Avatar2.png';
import { useSelector } from 'react-redux';

// let arrayMembers = [
//   {
//     id: '1',
//     fullName: 'David Blane',
//     jobPosition: 'senior software engineer',
//     imageSrc: Avatar1
//   },
//   {
//     id: '2',
//     fullName: 'Mick Blane',
//     jobPosition: 'middle software engineer',
//     imageSrc: Avatar2
//   }
// ];

const Members = () => {
  const [modalActive, setModalActive] = useState(false);
  const [deletedMember, setDeletedMember] = useState('');
  const user = useSelector((state) => state.user);
  const members = user.users.filter((member) => member.isMaster !== true);

  const handleDelClick = (id) => {
    setDeletedMember(id);
    setModalActive(true);
  };

  const handleDeleteMember = (id) => {
    members = members.filter((member) => member.id !== id);
  };

  const getMemberName = () => {
    let memberName = '';
    members.forEach((member) => {
      if (member.id === deletedMember) {
        memberName = member.name;
      }
    });
    return memberName;
  };

  return (
    <>
      <Box maxW="1200px" mt="20px">
        <Heading as="h5" size="lg" textAlign="center" mb="30px">
          Members:
        </Heading>
        <Flex maxW="1200px" wrap="wrap">
          {members.length ? (
            members.map((member) => (
              <OneMember
                key={member.id}
                member={member}
                deleteClick={handleDelClick}
              />
            ))
          ) : (
            <NoMembersCard />
          )}
        </Flex>
      </Box>
      <Modal active={modalActive} setActive={setModalActive}>
        <KickPlayerModal
          memberId={deletedMember}
          memberName={getMemberName()}
          onDelete={handleDeleteMember}
          onClose={setModalActive}
        />
      </Modal>
    </>
  );
};

export default Members;
