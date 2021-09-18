import React, { useContext, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import OneMember from '../members/OneMember';
import OneScore from './OneScore';
import { Modal } from '../modal/modal';
import { KickPlayerModal } from '../modals/KickPlayerModal';
import Avatar1 from '../../assets/icons/Avatar1.png';
import { UsersContext } from '../../contexts/usersContext';

// export let arrayMembers = [
//   {
//     id: '1',
//     firstName: 'David',
//     lastName: 'Blane',
//     position: 'senior software engineer',
//     image: Avatar1,
//     score: ''
//   },
//   {
//     id: '2',
//     firstName: 'Mick',
//     lastName: 'Blane',
//     position: 'middle software engineer',
//     image: '',
//     score: ''
//   }
// ];

const Players = () => {
  const [modalActive, setModalActive] = useState(false);
  const [deletedMember, setDeletedMember] = useState('');

  const { users } = useContext(UsersContext);

  const players = users.filter((player) => player.isMaster !== true);

  const handleDelClick = (id) => {
    setDeletedMember(id);
    setModalActive(true);
  };

  const handleDeleteMember = (id) => {
    players = players.filter((member) => member.id !== id);
  };

  const getMemberFirstName = () => {
    let memberFirstName = '';
    players.forEach((member) => {
      if (member.id === deletedMember) {
        memberFirstName = member.firstName;
      }
    });
    return memberFirstName;
  };

  return (
    <>
      <Box maxW="1200px" mt="20px">
        <Flex maxW="1200px" wrap="wrap">
          {players.map((member) => (
            <Flex>
              <OneScore key={member.id} member={member} />
              <OneMember
                key={member.id}
                member={member}
                deleteClick={handleDelClick}
              />
            </Flex>
          ))}
        </Flex>
      </Box>
      <Modal active={modalActive} setActive={setModalActive}>
        <KickPlayerModal
          memberId={deletedMember}
          memberFirstName={getMemberFirstName()}
          onDelete={handleDeleteMember}
          onClose={setModalActive}
        />
      </Modal>
    </>
  );
};

export default Players;
