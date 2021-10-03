import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const IssueItem = ({ issue, deleteClick, revise }) => {
  const { id, name, priority } = issue;
  const user = useSelector((state) => state.user);

  return (
    <Box w={300} h={75} boxShadow='dark-lg' rounded='md' p='10px' m='5px'>
      <Flex align='center' justify='center'>
        <Box>
          <Box
            fontSize={20}
            fontWeight='bold'
            h='20px'
            mb='20px'
            maxW='200px'
            lineHeight='20px'
          >
            {name}
          </Box>
          <Box fontSize={12} fontWeight='bold' h='20px'>
            {priority}
          </Box>
        </Box>
        <Spacer />
        <EditIcon
          w='30px'
          h='30px'
          color='green.400'
          mr='10px'
          onClick={() => revise(issue)}
          _hover={{ cursor: 'pointer' }}
          visibility={user.isObserver || user.isMaster ? 'visible' : 'hidden'}
        />
        <DeleteIcon
          w='30px'
          h='30px'
          color='red'
          onClick={() => deleteClick(id)}
          _hover={{ cursor: 'pointer' }}
          visibility={user.isObserver || user.isMaster ? 'visible' : 'hidden'}
        />
      </Flex>
    </Box>
  );
};

export default IssueItem;
