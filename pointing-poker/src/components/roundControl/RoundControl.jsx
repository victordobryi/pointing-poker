import React, { useState } from "react";
import { Flex, Button } from "@chakra-ui/react";
import Timer from "../timer/Timer";

const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped",
};

const initCount = 130;

export const RoundControl = () => {
  const [status, setStatus] = useState(STATUS.STOPPED);
  const [secondsRemaining, setSecondsRemaining] = useState(initCount);

  const handleOnclickRun = () => {
    setStatus(STATUS.STARTED);
  };

  const handleOnclickRestart = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(initCount);
    setStatus(STATUS.STARTED);
  };
  return (
    <Flex mb="20px" direction="column" justify="center" align="center">
      <Timer
        setStatus={setStatus}
        status={status}
        setSecondsRemaining={setSecondsRemaining}
        secondsRemaining={secondsRemaining}
        initCount={initCount}
      />
      <Button
        colorScheme={"facebook"}
        w="160px"
        m={5}
        onClick={handleOnclickRun}
      >
        Run Round
      </Button>
      <Button
        colorScheme={"facebook"}
        w="160px"
        m={5}
        onClick={handleOnclickRestart}
      >
        Restart Round
      </Button>
    </Flex>
  );
};
