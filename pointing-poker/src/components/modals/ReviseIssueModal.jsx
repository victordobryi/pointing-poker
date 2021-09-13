import React, {useState} from 'react';
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
  const [errors, setErrors] = useState({
    nameError: false,
    linkError: false,
    priorityError: false
  });

  const handleTypesSelect = (e) => {
    if ( e.target.value !== "low" 
      && e.target.value !== "middle" 
      && e.target.value !=="height" 
    ) {
      setErrors((errors) => ({...errors, priorityError: true}));
    } else {
      setErrors((errors) => ({...errors, priorityError: false}));
    }
    setCurrentIssue(issue => ({ ...issue, priority: e.target.value}));
  }
  
  const handleInputNameSelect = (e) => {
    const issueString = 'issue';
    const decimal = /^[0-9]+$/g;
    if (e.target.value.slice(0, 5) !== issueString || !decimal.test(e.target.value.slice(6))){
      setErrors((errors) => ({...errors, nameError: true}));
    } else {
      setErrors((errors) => ({...errors, nameError: false}));
    }
    setCurrentIssue(issue => ({ ...issue, name: e.target.value}));
  }

  const handleInputLinkSelect = (e) => {
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    if (!expression.test(e.target.value)) {
      setErrors((errors) => ({...errors, linkError: true}));
    } else {
      setErrors((errors) => ({...errors, linkError: false}));
    }
    setCurrentIssue(issue => ({ ...issue, link: e.target.value}));
  }
  
  const handleReviseClick = () => {
    if (issue.name === '') {
      setErrors((errors) => ({...errors, nameError: true}));
      return;
    };

    if (issue.link === '') {
      setErrors((errors) => ({...errors, linkError: true}));
      return;
    };

    if (issue.priority === '') {
      setErrors((errors) => ({...errors, priorityError: true}));
      return;
    };

    if (errors.nameError !== true && errors.linkError !== true && errors.priorityError !== true) {
      if (issue.id === '') {
        setCurrentIssue(issue.id = new Date().valueOf());
      }
      onRevise();
      onClose(false);
    } else return;
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
        <Text 
          fontSize="sm" 
          fontWeight="bold"  
          textAlign="center" 
          mb="-16px"
          color={errors.nameError === true ? 'red' : 'black'}
        >
          Input string 'issue' and number of issue
        </Text>
        <Flex margin="20px">
          <FormLabel mb="0" fontSize="lg" fontWeight="bold">Title:</FormLabel>
          <Spacer />
          <Input 
            ml="50px" 
            value={issue.name?issue.name:''} 
            onChange={handleInputNameSelect} 
            fontWeight="bold"
            fontSize="lg"
          />
        </Flex>
        <Text 
          fontSize="sm" 
          fontWeight="bold"  
          textAlign="center" 
          mb="-16px"
          color={errors.linkError === true ? 'red' : 'black'}
        >
          Input link to issue
        </Text>
        <Flex margin="20px">
          <FormLabel mb="0" fontSize="lg" fontWeight="bold">Link:</FormLabel>
          <Spacer />
          <Input 
            ml="50px" 
            value={issue.link?issue.link:''} 
            onChange={handleInputLinkSelect}
            fontWeight="bold"
            fontSize="lg"
          />
        </Flex>
        <Text 
          fontSize="sm" 
          fontWeight="bold"  
          textAlign="center"
          mb="-16px"
          color={errors.priorityError === true ? 'red' : 'black'}
        >
          Select issues priority
        </Text>
        <Flex margin="20px">
          <FormLabel mb="0" fontSize="lg" fontWeight="bold">Priority:</FormLabel>
          <Select 
            placeholder="Select issues priority" 
            w="50%" 
            ml="23px"
            fontWeight="bold"
            fontSize="lg" 
            onChange={handleTypesSelect}
          >
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