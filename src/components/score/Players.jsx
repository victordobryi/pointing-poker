import React, { useState } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import OneMember from "../members/OneMember";
import OneScore from "./OneScore";
import { Modal } from "../modal/modal";
import { KickPlayerModal } from "../modals/KickPlayerModal";
import Avatar1 from "../../assets/icons/Avatar1.png";
import Avatar2 from "../../assets/icons/Avatar2.png";

let arrayMembers = [
  {
    id: "1",
    name: "David Blane",
    position: "senior software engineer",
    image: Avatar1,
    score: "",
  },
  {
    id: "2",
    name: "Mick Blane",
    position: "middle software engineer",
    image: Avatar2,
    score: "",
  },
];

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

  const getMemberName = () => {
    let memberName = "";
    arrayMembers.forEach((member) => {
      if (member.id === deletedMember) {
        memberName = member.name;
      }
    });
    return memberName;
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
          memberName={getMemberName()}
          onDelete={handleDeleteMember}
          onClose={setModalActive}
        />
      </Modal>
    </>
  );
};

export default Players;
