import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

import FooterLogo from "../assets/img/logowhitelong.png";

export default function LargeWithLogoLeft() {
  return (
    <Box py="60px" bg="#111111" color="#ffffff" fontFamily="Oswald">
      <Container px="120px" maxW="100%" as={Stack} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 2fr" }}
          spacing={8}
        >
          <Stack w="100%" spacing={6}>
            <Box>
              <Image w="640px" alt={"footer logo"} src={FooterLogo} />
            </Box>
            <Text fontSize={"sm"}>
              © 2023 Speed energy. All rights reserved
            </Text>
          </Stack>
          <Stack paddingLeft="200px" fontSize="28px" align={"flex-start"}>
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
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
