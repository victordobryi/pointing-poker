import React, {useState} from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Switch,
  Flex,
  Spacer,
  Select,
} from "@chakra-ui/react";

const SettingsForm = () => {
  const [settingsData, setSettingsData] = useState({
    isMaster: false,
    isChanging: false,
    isTimer: false,
    scoreType: '',
    minutes: 0,
    seconds: 0,
  });

  const handleIsMasterSelect = () => {
    setSettingsData(settingsData => ({ ...settingsData, isMaster: !settingsData.isMaster }));
  }

  const handleChangigngSelect = () => {
    setSettingsData(settingsData => ({ ...settingsData, isChanging: !settingsData.isChanging }));
  }

  const handleIsTimerSelect = () => {
    setSettingsData(settingsData => ({ ...settingsData, isTimer: !settingsData.isTimer }));
  }

  const handleTypesSelect = (e) => {
    setSettingsData(settingsData => ({ ...settingsData, scoreType: e.target.value}));
  }

  const handleMinutesChange = (e) => {
    setSettingsData(settingsData => ({ ...settingsData, minutes: e}));
  }

  const handleSecondsChange = (e) => {
    setSettingsData(settingsData => ({ ...settingsData, seconds: e}));
  }

  return (
    <Box maxW="550px" ml="36px">
      <Heading as="h4" size="sm" textAlign="right" mb="50px">
        Game settings:
      </Heading>
      <FormControl id="settings">
        <Flex mb="20px">
          <FormLabel htmlFor="masterIsPlayer" mb="0" fontSize="lg">Scram master as player:</FormLabel>
          <Spacer />
          <Switch id="masterIsPlayers" colorScheme="teal" onChange={handleIsMasterSelect}/>
        </Flex>
        <Flex mb="20px">
          <FormLabel htmlFor="cardChanging" mb="0" fontSize="lg">Changing card in round end:</FormLabel>
          <Spacer />
          <Switch id="cardChanging" colorScheme="teal" onChange={handleChangigngSelect}/>
        </Flex>
        <Flex mb="20px">
          <FormLabel htmlFor="isTimer" mb="0" fontSize="lg">Is timer needed:</FormLabel>
          <Spacer />
          <Switch id="isTimer" colorScheme="teal" onChange={handleIsTimerSelect}/>
        </Flex>
        <Flex mb="20px">
          <FormLabel htmlFor="scoreType" mb="0" fontSize="lg">Score type:</FormLabel>
          <Spacer />
          <Select id="scoreType" placeholder="Select score type" w="50%" onChange={handleTypesSelect}>
            <option value="FN">Fibonacci Numbers</option>
            <option value="TS">T-shirts</option>
            <option value="PC">Playing Cards</option>
          </Select>
        </Flex>
        <Flex mb="20px">
          <FormLabel mb="0" fontSize="lg">Score type (Short):</FormLabel>
          <Spacer />
          <Box fontSize={30} fontWeight="bold">{settingsData.scoreType}</Box>
        </Flex>
        <Flex mb="20px">
          <FormLabel htmlFor="timer" mb="0" fontSize="lg">Round time:</FormLabel>
          <Spacer />
            <Flex >
              <Box>
                <FormLabel mb="0" fontSize="sm">Minutes</FormLabel>
                <NumberInput defaultValue={0} min={0} max={5} size="lg" maxW={24} boxShadow="lg" rounded="md" onChange={handleMinutesChange}>
                  <NumberInputField fontSize={30} fontWeight="bold" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
              <Box fontSize={28} fontWeight="bold" lineHeight="80px">:</Box>
              <Box>
                <FormLabel mb="0" fontSize="sm">Seconds</FormLabel>
                  <NumberInput defaultValue={0} min={0} max={60} size="lg" maxW={24} boxShadow="lg" rounded="md" onChange={handleSecondsChange}>
                  <NumberInputField fontSize={30} fontWeight="bold" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
            </Flex>
        </Flex>
      </FormControl>
    </Box >
  );
}

export default SettingsForm;