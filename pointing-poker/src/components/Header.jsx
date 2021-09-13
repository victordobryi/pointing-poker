import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
//import { Link as ReachLink } from "@reach/router";
import { Link } from "@chakra-ui/react";
import logo from "../assets/icons/logo.png";
import message from "../assets/icons/message.svg";

export const Header = () => {
  return (
    <Flex direction="column" w="100%" m={0}>
      <Box h={50} m={0} backgroundColor="#2B3A67" w="100%">
        <Link href="#">
          <Image
            src={message}
            w={19}
            h={19}
            verticalAlign="center"
            margin="17px 90%"
          ></Image>
        </Link>
      </Box>
      <Box
        h={19}
        m={0}
        backgroundColor="#66999B"
        w="100%"
        position="relative"
        boxShadow="md"
      ></Box>

      <Image
        src={logo}
        alt="Logo app"
        boxSize="70px"
        marginLeft="3%"
        objectFit="cover"
        position="absolute"
        top="0"
        transform="translate(0, 26%)"
      />
    </Flex>
  );
};
