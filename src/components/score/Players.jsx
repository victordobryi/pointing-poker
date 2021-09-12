import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import OneMember from "../members/OneMember";
import OneScore from "./OneScore";
import { Modal } from "../modal/modal";
import { KickPlayerModal } from "../modals/KickPlayerModal";
import { arrayMembers } from "../members/Members";

const Players = () => {
  const [modalActive, setModalActive] = useState(false);
  const [deletedMember, setDeletedMember] = useState("");

  const handleDelClick = (id) => {
    setDeletedMember(id);
    setModalActive(true);
  };

  const handleDeleteMember = (id) => {
    arrayMembers = arrayMembers.filter((member) => member.id !== id);
  };

  const getMemberFirstName = () => {
    let memberFirstName = "";
    arrayMembers.forEach((member) => {
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
          {arrayMembers.map((member) => (
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
