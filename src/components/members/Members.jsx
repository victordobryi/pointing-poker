import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import OneMember from './OneMember';

const arrayMembers = [
  {
    name: 'David Blane',
    position: 'senior software engineer',
    image: ''
  }
];

const Members = () => {
  return (
    <Box maxW="550px" ml="360px" mr="36px">
      <Heading as="h5" size="lg" textAlign="right" mb="50px">
        Members:
      </Heading>
      <Box maxW="550px" ml="360px" mr="36px">
        {arrayMembers.map(({ name, position, image }, index) => (
          <OneMember
            key={index}
            name={name}
            position={position}
            image={image}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Members;
