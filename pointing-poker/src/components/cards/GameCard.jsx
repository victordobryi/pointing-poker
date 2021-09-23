import React, { useState } from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import './cards.scss';
import active from '../../assets/icons/selected.svg';
const GameCard = ({ scoreType, image }) => {
  const [isActive, setIsActive] = useState(false);
  const handleCardChoose = (e) => {
    deleActiveClasses();
    e.currentTarget.classList.add('active');
    setIsActive(true);
  };

  const deleActiveClasses = () => {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach((card) => {
      card.classList.remove('active');
    });
  };
  return (
    <Box
      onClick={handleCardChoose}
      w={100}
      h={160}
      boxShadow="dark-lg"
      rounded="md"
      p="10px"
      m="5px"
      _hover={{ cursor: 'pointer' }}
      className="game-card"
    >
      <Box fontSize={20} fontWeight="bold" h="20px">
        {scoreType}
      </Box>
      <Flex align="center" justify="center" h="100px">
        {image.length < 10 ? (
          <Box fontSize={40} fontWeight="bold">
            {image}
          </Box>
        ) : (
          <Image
            src={image}
            alt="Card-image"
            boxSize="60px"
            objectFit="cover"
          />
        )}
      </Flex>
      <Box fontSize={20} fontWeight="bold" transform="rotate(180deg)" h="20px">
        {scoreType}
      </Box>
      {isActive ? (
        <Image src={active} w={50} h={50} className="active-arrow" />
      ) : null}
    </Box>
  );
};

export default GameCard;
