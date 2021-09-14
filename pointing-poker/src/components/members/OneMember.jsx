import React from "react";
import { Box, Flex, Spacer, Image, Avatar } from "@chakra-ui/react";
import { NotAllowedIcon } from '@chakra-ui/icons'

const OneMember = ({ member, deleteClick }) => {
  const { fullName, jobPosition, idd, firstName, lastName, imageSrc } = member;
  console.log(jobPosition)
  return (
    <Box
      w={300}
      h={75}
      boxShadow="dark-lg"
      rounded="md"
      p="6px"
      m="5px"
    >
      <Flex align="center" justify="center">
        <Avatar
          name={
            firstName
              ? firstName + ' ' + lastName
              : null
          }
          src={imageSrc}
          size={'lg'}
        />
        <Spacer />
        <Box >
          <Box fontSize={20} fontWeight="bold" h="20px" mb="20px" maxW="120px" lineHeight="20px">
            {fullName}
          </Box>
          <Box fontSize={10} fontWeight="bold" h="20px">
            {jobPosition}
          </Box>
        </Box>
        <Spacer />
        {
          member.isMaster === true
            ? null
            : <NotAllowedIcon
              w="30px"
              h="30px"
              color="red"
              onClick={() => deleteClick(idd)}
              _hover={{ cursor: "pointer" }}
            />
        }
      </Flex>
    </Box>
  );
};

export default OneMember;
