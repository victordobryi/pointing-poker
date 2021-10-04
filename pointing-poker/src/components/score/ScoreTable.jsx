import React from "react";
import { VStack, Flex, Heading } from "@chakra-ui/react";
import Players from "../score/Players";
import styles from '../../pages/game.module.scss';

export const ScoreTable = () => {
  return (
    <Flex className={styles.scoreTable}>
      <Flex direction="row" w="90%" justify="space-between" align="center" >
        <Heading className={styles.blocksTitle}>
          Score:
        </Heading>
        <Heading className={styles.blocksTitle}>
          Players:
        </Heading>
      </Flex>
      <VStack>
        <Players />
      </VStack>
    </Flex>
  );
};
