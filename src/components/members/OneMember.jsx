import React from "react";
import { Box, Flex, Spacer, Image } from "@chakra-ui/react";
import { NotAllowedIcon } from '@chakra-ui/icons'

const OneMember = ({ member, deleteClick }) => {
  const {name, position, id} = member;
  const image = member.image ? member.image : '';
  return(
    <Box
        w={300}
        h={75}
        boxShadow="dark-lg"
        rounded="md"
        p="6px"
        m="5px"
      >
        <Flex align="center" justify="center">
          <Image src={image} alt="Card-image" boxSize="60px" objectFit="cover" />
          <Spacer />
          <Box >
            <Box fontSize={20} fontWeight="bold" h="20px" mb="20px" maxW="120px" lineHeight="20px">
              {name}
            </Box>
            <Box fontSize={10} fontWeight="bold" h="20px">
              {position}
            </Box>
          </Box>
          <Spacer />
          {
            member.id === 'admin' 
              ? null 
              : <NotAllowedIcon 
                  w="30px" 
                  h="30px" 
                  color="red" 
                  onClick={()=>deleteClick(id)} 
                  _hover={{ cursor: "pointer" }}
                />
          }
          
        </Flex>
      </Box>
    );
};

export default OneMember;