import {
  Flex,
  useDisclosure,
  Box,
  Heading,
  Spacer,
  Text,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Image,
} from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";

import english from "../assets/img/english.png";
import mongolia from "../assets/img/mongolia.png";
import Logowhitelongtext from "../assets/img/logowhitetext.png";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        px="120px"
        bg="#d82424"
        minWidth="max-content"
        alignItems="center"
        gap="2"
      >
        <Box my="12px" p="2">
          <Heading size="md">
            <Flex onClick={onOpen} cursor="pointer">
              <BiMenuAltRight size="45px" />
              <Text fontSize="34px" color="#ffffff" fontFamily="Oswald">
                АНГИЛАЛ
              </Text>
            </Flex>
          </Heading>
        </Box>
        <Spacer />
        <Image width="350px" src={Logowhitelongtext} />
        <Spacer />
        <Flex>
          <Image
            width="56px"
            height="27px"
            className="transition group-hover:skew-y-6 duration-300"
            alt="mongolia"
            border="solid 1px #fff"
            src={english}
          />
          <Box mx="17px" bg="#111" width="3px" height="34px" />
          <Image
            width="56px"
            height="27px"
            className="transition group-hover:skew-y-6 duration-300"
            alt="mongolia"
            border="solid 1px #fff"
            src={mongolia}
          />
        </Flex>
      </Flex>
      <Drawer size="lg" placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor="#d82424">
          <DrawerHeader>
            <Flex height="125px" justifyContent="center" alignItems="center">
              <Image width="350px" src={Logowhitelongtext} />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex marginBottom="15px" className="group">
              <Box
                marginTop="30px"
                marginBottom="10px"
                marginRight="40px"
                marginLeft="50px"
                width="65px"
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize="40px"
                lineHeight="normal"
                fontWeight="bold"
                color="#2a2a2a"
                fontFamily="Oswald"
                className="group-hover:text-[#ffffff] transition group-hover:scale-110 duration-300"
              >
                АВТО ТОНОГЛОЛ
              </Text>
            </Flex>
            <Flex marginBottom="15px" className="group">
              <Box
                marginTop="30px"
                marginBottom="10px"
                marginRight="40px"
                marginLeft="50px"
                width="65px"
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize="40px"
                lineHeight="normal"
                fontWeight="bold"
                color="#2a2a2a"
                fontFamily="Oswald"
                className="group-hover:text-[#ffffff] transition group-hover:scale-110 duration-300"
              >
                АМАРТИЗАТОР
              </Text>
            </Flex>
            <Flex marginBottom="15px" className="group">
              <Box
                marginTop="30px"
                marginBottom="10px"
                marginRight="40px"
                marginLeft="50px"
                width="65px"
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize="40px"
                lineHeight="normal"
                fontWeight="bold"
                color="#2a2a2a"
                fontFamily="Oswald"
                className="group-hover:text-[#ffffff] transition group-hover:scale-110 duration-300"
              >
                НЭМЭЛТ ГЭРЭЛ
              </Text>
            </Flex>
            <Flex marginBottom="15px" className="group">
              <Box
                marginTop="30px"
                marginBottom="10px"
                marginRight="40px"
                marginLeft="50px"
                width="65px"
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize="40px"
                lineHeight="normal"
                fontWeight="bold"
                color="#2a2a2a"
                fontFamily="Oswald"
                className="group-hover:text-[#ffffff] transition group-hover:scale-110 duration-300"
              >
                АЯЛЛЫН ХЭРЭГСЭЛ
              </Text>
            </Flex>
            <Flex marginBottom="15px" className="group">
              <Box
                marginTop="30px"
                marginBottom="10px"
                marginRight="40px"
                marginLeft="50px"
                width="65px"
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize="40px"
                lineHeight="normal"
                fontWeight="bold"
                color="#2a2a2a"
                fontFamily="Oswald"
                className="group-hover:text-[#ffffff] transition group-hover:scale-110 duration-300"
              >
                БУСАД ТОНОГЛОЛ
              </Text>
            </Flex>
            <Flex marginBottom="15px" className="group">
              <Box
                marginTop="30px"
                marginBottom="10px"
                marginRight="40px"
                marginLeft="50px"
                width="65px"
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize="40px"
                lineHeight="normal"
                fontWeight="bold"
                color="#2a2a2a"
                fontFamily="Oswald"
                className="group-hover:text-[#ffffff] transition group-hover:scale-110 duration-300"
              >
                МОТОЦИКЛ
              </Text>
            </Flex>
            <Flex marginBottom="15px" className="group">
              <Box
                marginTop="30px"
                marginBottom="10px"
                marginRight="40px"
                marginLeft="50px"
                width="65px"
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize="40px"
                lineHeight="normal"
                fontWeight="bold"
                color="#2a2a2a"
                fontFamily="Oswald"
                className="group-hover:text-[#ffffff] transition group-hover:scale-110 duration-300"
              >
                АЯНЫ ЧИРГҮҮЛ
              </Text>
            </Flex>
            <Flex marginBottom="15px" className="group">
              <Box
                marginTop="30px"
                marginBottom="10px"
                marginRight="40px"
                marginLeft="50px"
                width="65px"
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize="40px"
                lineHeight="normal"
                fontWeight="bold"
                color="#2a2a2a"
                fontFamily="Oswald"
                className="group-hover:text-[#ffffff] transition group-hover:scale-110 duration-300"
              >
                ЗАСВАР ҮЙЛЧИЛГЭЭ
              </Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
