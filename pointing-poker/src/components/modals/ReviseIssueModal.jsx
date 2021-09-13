import React from 'react';
import {
  Text,
  Button,
  Flex,
  Spacer,
  FormControl,
  FormLabel,
  Select,
  Input,
} from "@chakra-ui/react";
import './KickPlayerModal.scss';

export const ReviseIssueModal = ({issue, onClose, setCurrentIssue, onRevise}) => {
  const handleTypesSelect = (e) => {
    setCurrentIssue(issue => ({ ...issue, priority: e.target.value}));
  }
  
  const handleInputNameSelect = (e) => {
    setCurrentIssue(issue => ({ ...issue, name: e.target.value}));
  }

  const handleInputLinkSelect = (e) => {
    setCurrentIssue(issue => ({ ...issue, link: e.target.value}));
  }
  
  const handleReviseClick = () => {
    if (issue.id === undefined) {
      setCurrentIssue(issue.id = new Date().valueOf());
    }
    onRevise();
    onClose(false);
  }

  return (
    <>
      <Text 
        fontSize="30px"
        fontWeight="800"
        align="center"
      >
        Create Issue
      </Text>
      <FormControl>
        <Flex margin="20px">
          <FormLabel mb="0" fontSize="lg" fontWeight="bold">Title:</FormLabel>
          <Spacer />
          <Input ml="50px" value={issue.name?issue.name:''} onChange={handleInputNameSelect}/>
        </Flex>
        <Flex margin="20px">
          <FormLabel mb="0" fontSize="lg" fontWeight="bold">Link:</FormLabel>
          <Spacer />
          <Input ml="50px" value={issue.link?issue.link:''} onChange={handleInputLinkSelect}/>
        </Flex>
        <Flex margin="20px">
          <FormLabel mb="0" fontSize="lg" fontWeight="bold">Priority:</FormLabel>
          <Select placeholder="Select issues priority" w="50%" ml="23px" onChange={handleTypesSelect}>
            <option value="low" selected={issue.priority==="low"}>Low</option>
            <option value="middle" selected={issue.priority==="middle"}>Middle</option>
            <option value="height" selected={issue.priority==="height"}>Height</option>
          </Select>
        </Flex>
      </FormControl>
      <Flex justify="space-around">
        <Button 
          colorScheme={'facebook'}
          height={47}
          width={189}
          variant="solid" 
          mr={3}
          onClick={handleReviseClick}
        >
          Yes
        </Button>
        <Button 
          colorScheme={'facebook'}
          height={47}
          width={189}
          variant="outline" 
          onClick={()=>onClose(false)}>
          No
        </Button>
      </Flex>
    </>
  );
}