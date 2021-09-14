import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
<<<<<<< HEAD
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const IssueItem = ({
  issue,
  deleteClick,
  revise,
  setActiveIssue,
  activeIssue,
}) => {
  const { id, name, priority } = issue;

  return (
    <Box
      w={300}
      h={75}
      boxShadow="dark-lg"
      rounded="md"
      p="10px"
      m="5px"
      onClick={() => setActiveIssue(issue)}
      bg={id === activeIssue.id ? "rgba(96, 218, 191, 0.33)" : ""}
    >
      <Flex align="center" justify="center" _hover={{ cursor: "pointer" }}>
        <Box>
          <Box
            fontSize={20}
            fontWeight="bold"
            h="20px"
            mb="20px"
            maxW="200px"
            lineHeight="20px"
          >
            {name}
          </Box>
          <Box fontSize={12} fontWeight="bold" h="20px">
            {priority}
          </Box>
        </Box>
        <Spacer />
        <EditIcon
          w="30px"
          h="30px"
          color="green.400"
          mr="10px"
          onClick={() => revise(issue)}
          _hover={{ cursor: "pointer" }}
        />
        <DeleteIcon
          w="30px"
          h="30px"
          color="red"
          onClick={() => deleteClick(id)}
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
    </Box>
  );
};

export default IssueItem;
=======
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

const IssueItem = ({ issue, deleteClick, revise }) => {

  const {id, name, priority} = issue;
 
  return(
    <Box
        w={300}
        h={75}
        boxShadow="dark-lg"
        rounded="md"
        p="10px"
        m="5px"
      >
        <Flex align="center" justify="center">
          <Box >
            <Box fontSize={20} fontWeight="bold" h="20px" mb="20px" maxW="200px" lineHeight="20px">
              {name}
            </Box>
            <Box fontSize={12} fontWeight="bold" h="20px">
              {priority}
            </Box>
          </Box>
          <Spacer />
            <EditIcon 
              w="30px" 
              h="30px" 
              color="green.400" 
              mr="10px"
              onClick={() => revise(issue)} 
              _hover={{ cursor: "pointer" }}
            />
            <DeleteIcon 
              w="30px" 
              h="30px" 
              color="red" 
              onClick={()=>deleteClick(id)} 
              _hover={{ cursor: "pointer" }}
            />
        </Flex>
      </Box>
    );
};

export default IssueItem;
>>>>>>> develop
