import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Img } from "@chakra-ui/image";
import { Link } from "@chakra-ui/layout";
import logoRss from "../assets/icons/logo-rs.svg";

export const Footer = () => {
  return (
    <Flex direction="column" w="100%">
      <Box h={70} m={0} backgroundColor="#2B3A67" w="100%">
        <Flex
          direction="row"
          justify="space-around"
          align="center"
          color="white"
        >
          <Link href="https://github.com/alexej1900">Alexej Bodnarchuk</Link>
          <Link href="https://github.com/victordobryi">Victar Kasilkin</Link>
          <Link href="https://github.com/barmenski">Alexandr Bondar</Link>
          <span>2021</span>
          <Link href="https://rs.school/react/">
            <Img src={logoRss} alt="logoRss" width={70} height={70} />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};
