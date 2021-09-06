import React from 'react';
import  {
  Box, 
  Flex, 
  FormLabel,
  NumberInput, 
  NumberInputField, 
  Input, 
  Spacer 
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

const NewGameCard = ({scoreType, addClick}) => {
  return (
    <Box w={100} h={160} boxShadow="dark-lg" rounded="md" p="10px" m="5px" _hover={{cursor:'pointer'}}>
      <Flex>
        <Box fontSize={20} fontWeight="bold"  h="20px">{scoreType}</Box>
        <Spacer />
        <CheckIcon w="20px" h="20px" color="green"/>
      </Flex>
      <Flex align="center" justify="center" h="100px">
        {
          scoreType === 'FN'
            ? <NumberInput>
                <FormLabel mb="0" fontSize="11px" >Input number</FormLabel>
                <NumberInputField maxVal={999} fontSize={24} fontWeight="bold" bg="gray.400" p={3}/>
              </NumberInput>
            : <Input 
                type="file"
                onClick={addClick}
              />
        }
      </Flex>
      <Flex transform="rotate(180deg)">
        <Box fontSize={20} fontWeight="bold" h="20px">{scoreType}</Box>
        <Spacer />
        <CloseIcon w="20px" h="20px" color="red"/>
      </Flex>
    </Box>
  );
}

export default NewGameCard;