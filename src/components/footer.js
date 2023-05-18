import { Box, Container, Flex, Stack, Text, Image } from "@chakra-ui/react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

import FooterLogo from "../assets/img/logowhitelong.png";

export default function LargeWithLogoLeft() {
  return (
    <Box py="60px" bg="#111111" color="#ffffff" fontFamily="Oswald">
      <Container px={{ base: "10px", md: "120px" }} maxW="100%" as={Stack}>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          <Flex direction={{ base: "column" }} w="100%" spacing={6}>
            <Box>
              <Image w="640px" alt={"footer logo"} src={FooterLogo} />
            </Box>
            <Text
              paddingTop="20px"
              margin={{ base: "auto", md: "unset" }}
              fontSize={"sm"}
            >
              © 2023 Speed energy. All rights reserved
            </Text>
          </Flex>
          <Flex
            paddingTop={{ base: "50px", md: "0px" }}
            paddingLeft={{ base: "0px", md: "100px" }}
            direction={{ base: "column" }}
            fontSize={{ base: "15px", md: "28px" }}
            align={"flex-start"}
          >
            <Stack alignItems="center" direction={"row"}>
              <Box marginRight="20px">
                <BsTelephone />
              </Box>
              <Text>97080001, 97090001</Text>
            </Stack>
            <Stack alignItems="center" direction={"row"}>
              <Box marginRight="20px">
                <AiOutlineMail />
              </Box>
              <Text>speedenergymongolia@gmail.com</Text>
            </Stack>
            <Stack alignItems="center" direction={"row"}>
              <Box marginRight="20px">
                <IoLocationOutline />
              </Box>
              <Text>
                Mongolia, Ulaanbaatar City, Sukhbaatar district, Chinggis
                Avenue, Altai building 5th floor
              </Text>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
