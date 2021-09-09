import React from "react";
import { Box, Flex, Spacer, Image } from "@chakra-ui/react";
import deleteIcon from "../../assets/icons/delete.svg";
const OneMember = ({ position, name, image, notDelete }) => {
  return (
    <div>
      <Box
        w={300}
        h={75}
        boxShadow="dark-lg"
        rounded="md"
        p="10px"
        m="5px"
        _hover={{ cursor: "pointer" }}
      >
        <Flex align="center" justify="center">
          <Image
            src={image}
            alt="Card-image"
            boxSize="60px"
            objectFit="cover"
          />
          <Spacer />

          <Flex flexDirection={"column"} h={50} justifyContent="space-between">
            <Box fontSize={20} fontWeight="bold" h="20px">
              {name}
            </Box>
            <Box fontSize={10} fontWeight="bold" h="20px">
              {position}
            </Box>
          </Flex>

          <Spacer />
          {notDelete ? <></> : <Image src={deleteIcon} w={7} mr={5} />}
        </Flex>
      </Box>
    </div>
  );
};

export default OneMember;
