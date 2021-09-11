import React, { useState } from "react";
import { Box, FormLabel, Flex, Spacer, Button } from "@chakra-ui/react";
import { NumberInputElem } from "./NumberInput";

export const RoundControl = () => {
  const [settingsData, setSettingsData] = useState({
    minutes: 0,
    seconds: 0,
  });

  const handleMinutesChange = (e) => {
    setSettingsData((settingsData) => ({ ...settingsData, minutes: e }));
  };

  const handleSecondsChange = (e) => {
    setSettingsData((settingsData) => ({ ...settingsData, seconds: e }));
  };

  return (
    <Flex mb="20px" direction="column" justify="center" align="center">
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
          <NumberInputElem min={0} max={60} onChange={handleSecondsChange} />
        </Box>
      </Flex>
      <Button colorScheme={"facebook"} w="160px">
        Run Round
      </Button>
    </Flex>
  );
};
