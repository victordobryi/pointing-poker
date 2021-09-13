import React from 'react';
import {Box, Image, Flex } from '@chakra-ui/react';

const GameCard = ({scoreType, image, addClick}) => {
  return (
    <Box w={100} h={160} boxShadow="dark-lg" rounded="md" p="10px" m="5px" _hover={{cursor:'pointer'}}>
      <Box fontSize={20} fontWeight="bold"  h="20px">{scoreType}</Box>
      <Flex align="center" justify="center" h="100px">
        {
          image.length < 10
            ? <Box fontSize={40} fontWeight="bold">{image}</Box>
            : <Image 
                src={image} 
                alt="Card-image"
                boxSize="60px"
                objectFit="cover"
                onClick={addClick}
              />
        }
        
      </Flex>
      <Box fontSize={20} fontWeight="bold"  transform="rotate(180deg)" h="20px">{scoreType}</Box>
    </Box>
  );
}

export default GameCard;