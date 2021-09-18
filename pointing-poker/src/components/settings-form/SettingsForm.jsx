import React, { useContext, useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Switch,
  Flex,
  Spacer,
  Select
} from '@chakra-ui/react';
import { NumberInputElem } from './NumberInput';
import GameCard from '../cards/GameCard';
import AddCard from '../cards/AddCard';
import NewGameCard from '../cards/NewGameCard';
import cup from '../../assets/icons/Cup.png';
import J from '../../assets/icons/J.png';
import Q from '../../assets/icons/Q.png';
import K from '../../assets/icons/K.png';
import A from '../../assets/icons/A.png';
import { Socket } from 'socket.io-client';
import { SocketContext } from '../../contexts/socketContext';
import { useDispatch, useSelector } from 'react-redux';

const fibonacciCards = ['0', '1', '2', '3', '5', '8', cup];

const TshirtsCards = ['XS', 'S', 'M', 'L', 'XL', cup];

const PlayingCards = ['6', '7', J, Q, K, A, cup];

const SettingsForm = () => {
  const [settingsData, setSettingsData] = useState({
    isMaster: false,
    isChanging: false,
    isTimer: false,
    scoreType: '',
    minutes: 0,
    seconds: 0
  });
  const socket = useContext(SocketContext);

  const timer = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  let cards =
    settingsData.scoreType === 'FN'
      ? fibonacciCards
      : settingsData.scoreType === 'TS'
      ? TshirtsCards
      : PlayingCards;

  const [isNewCard, setIsNewCard] = useState(false);

  const handleIsMasterSelect = () => {
    setSettingsData((settingsData) => ({
      ...settingsData,
      isMaster: !settingsData.isMaster
    }));
  };

  const handleChangigngSelect = () => {
    setSettingsData((settingsData) => ({
      ...settingsData,
      isChanging: !settingsData.isChanging
    }));
  };

  const handleIsTimerSelect = () => {
    setSettingsData((settingsData) => ({
      ...settingsData,
      isTimer: !settingsData.isTimer
    }));
  };

  const handleTypesSelect = (e) => {
    setSettingsData((settingsData) => ({
      ...settingsData,
      scoreType: e.target.value
    }));
  };

  const handleMinutesChange = (min) => {
    setSettingsData((settingsData) => ({ ...settingsData, minutes: min }));
    // console.log(min, 'handleFunc');
    // socket.emit('changeMinutes', min);
    dispatch({ type: 'SET_MINUTES', payload: min });
  };

  const handleSecondsChange = (sec) => {
    setSettingsData((settingsData) => ({ ...settingsData, seconds: sec }));
    // console.log(sec, 'handleFunc');
    // socket.emit('changeSeconds', sec);
    dispatch({ type: 'SET_SECONDS', payload: sec });
  };

  const handleAddClick = (e) => {
    setIsNewCard(true);
  };

  const handleNewCardClick = (value) => {
    cards.push(value);
    setIsNewCard(false);
  };

  const handleDelCardClick = (e) => {
    setIsNewCard(false);
  };

  return (
    <>
      <Heading as="h5" size="lg" textAlign="center" mb="30px" mt="20px">
        Game settings:
      </Heading>
      <Box maxW="550px" ml="36px" mr="36px">
        <FormControl id="settings">
          <Flex mb="20px">
            <FormLabel mb="0" fontSize="lg">
              Scram master as player:
            </FormLabel>
            <Spacer />
            <Switch colorScheme={'facebook'} onChange={handleIsMasterSelect} />
          </Flex>
          <Flex mb="20px">
            <FormLabel mb="0" fontSize="lg">
              Changing card in round end:
            </FormLabel>
            <Spacer />
            <Switch colorScheme={'facebook'} onChange={handleChangigngSelect} />
          </Flex>
          <Flex mb="20px">
            <FormLabel mb="0" fontSize="lg">
              Is timer needed:
            </FormLabel>
            <Spacer />
            <Switch colorScheme={'facebook'} onChange={handleIsTimerSelect} />
          </Flex>
          <Flex mb="20px">
            <FormLabel mb="0" fontSize="lg">
              Score type:
            </FormLabel>
            <Spacer />
            <Select
              placeholder="Select score type"
              w="50%"
              onChange={handleTypesSelect}
            >
              <option value="FN">Fibonacci Numbers</option>
              <option value="TS">T-shirts Size</option>
              <option value="PC">Playing Cards</option>
            </Select>
          </Flex>
          <Flex mb="20px">
            <FormLabel mb="0" fontSize="lg">
              Score type (Short):
            </FormLabel>
            <Spacer />
            <Box fontSize={30} fontWeight="bold" h="30px">
              {settingsData.scoreType}
            </Box>
          </Flex>
          {settingsData.isTimer ? (
            <Flex mb="20px">
              <FormLabel mb="0" fontSize="lg">
                Round time:
              </FormLabel>
              <Spacer />
              <Flex>
                <Box>
                  <FormLabel mb="0" fontSize="sm">
                    Minutes
                  </FormLabel>
                  <NumberInputElem
                    minVal={0}
                    maxVal={5}
                    onChangeFn={handleMinutesChange}
                  />
                </Box>
                <Box fontSize={28} fontWeight="bold" lineHeight="80px">
                  :
                </Box>
                <Box>
                  <FormLabel mb="0" fontSize="sm">
                    Seconds
                  </FormLabel>
                  <NumberInputElem
                    min={0}
                    max={60}
                    onChangeFn={handleSecondsChange}
                  />
                </Box>
              </Flex>
            </Flex>
          ) : null}
        </FormControl>
        {settingsData.scoreType === '' ? (
          <Box h="180px"></Box>
        ) : (
          <>
            <FormLabel mb="0" fontSize="lg">
              Add card values:
            </FormLabel>
            <Flex wrap="wrap">
              {cards.map((card) => (
                <GameCard
                  key={card}
                  scoreType={settingsData.scoreType}
                  image={card}
                />
              ))}
              {!isNewCard ? (
                <AddCard addClick={handleAddClick} />
              ) : (
                <NewGameCard
                  scoreType={settingsData.scoreType}
                  addClick={handleNewCardClick}
                  deleteClick={handleDelCardClick}
                />
              )}
            </Flex>
          </>
        )}
      </Box>
    </>
  );
};

export default SettingsForm;
