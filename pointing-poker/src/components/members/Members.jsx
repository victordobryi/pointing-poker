import React, {useState} from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import OneMember from "./OneMember";
import { Modal } from '../modal/modal';
import { KickPlayerModal } from "../modals/KickPlayerModal";

let arrayMembers = [
    {
      id: '1',
      name: "David Blane",
      position: "senior software engineer",
      image: "",
    },
    {
      id: '2',
      name: "Mick Blane",
      position: "middle software engineer",
      image: "",
    },
  ];

const Members = () => {
  const [modalActive, setModalActive] = useState(false);
  const [deletedMember, setDeletedMember] = useState('');
  
  const handleDelClick = (id) => {
    setDeletedMember(id);
    setModalActive(true);
  } 

  const handleDeleteMember = (id) => {
    arrayMembers = arrayMembers.filter((member) => member.id !== id);
  }

  const getMemberName = () => {
    let memberName = '';
    arrayMembers.forEach((member) => {
      if (member.id === deletedMember) {
        memberName = member.name;
      }
    })
    return memberName;
  }

  return (
    <>
      <Box maxW="550px" ml="36px" mr="36px">
        <Heading as="h5" size="lg" textAlign="right" mb="50px">
          Members:
        </Heading>
        <Flex maxW="550px" ml="36px" mr="36px">
          {
            arrayMembers.map((member) => 
              <OneMember key={member.id} member={member} deleteClick={handleDelClick}/>)
          }
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
  )
}

export default Members;