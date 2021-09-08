import React from 'react';
import { Box, Flex, Spacer, CloseIcon, Image } from '@chakra-ui/react';

const OneMember = ({ position, name, image, deleteClick }) => {
  return (
    <div>
      <Box
        w={300}
        h={75}
        boxShadow="dark-lg"
        rounded="md"
        p="10px"
        m="5px"
        _hover={{ cursor: 'pointer' }}
      >
        <Flex align="center" justify="center">
          <Box fontSize={20} fontWeight="bold" h="20px">
            {name}
          </Box>
          <Spacer />
          <Box fontSize={10} fontWeight="bold" h="20px">
            {position}
          </Box>
          <Spacer />
          <Image
            src={image}
            alt="Card-image"
            boxSize="60px"
            objectFit="cover"
          />
          {/* <CloseIcon w="20px" h="20px" color="red" onClick={deleteClick} /> */}
        </Flex>
      </Box>
    </div>
  );
};

export default OneMember;
