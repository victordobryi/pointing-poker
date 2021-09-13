import React, { useState } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import OneMember from "./OneMember";
import NoMembersCard from "./NoMembersCard";
import { Modal } from "../modal/modal";
import { KickPlayerModal } from "../modals/KickPlayerModal";
import Avatar1 from "../../assets/icons/Avatar1.png";

export let arrayMembers = [
  {
    id: "1",
    firstName: "David",
    lastName: "Blane",
    position: "senior software engineer",
    image: Avatar1,
    score: "",
  },
  {
    id: "2",
    firstName: "Mick",
    lastName: "Blane",
    position: "middle software engineer",
    image: "",
    score: "",
  },
];

export const Members = () => {
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
        <Heading as="h5" size="lg" textAlign="center" mb="30px">
          Members:
        </Heading>
        <Flex maxW="1200px" wrap="wrap">
          {arrayMembers.length ? (
            arrayMembers.map((member) => (
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
