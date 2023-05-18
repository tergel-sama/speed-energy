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
import { useNavigate } from "react-router-dom";

import english from "../assets/img/lineenglish.png";
import mongolia from "../assets/img/linemongolia.png";
import Logowhitelongtext from "../assets/img/logowhitetext.png";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  return (
    <>
      <Flex
        px={{ base: "5px", md: "120px" }}
        bg="#111111"
        minWidth="max-content"
        alignItems="center"
        gap="2"
      >
        <Box my="12px" p="2">
          <Heading size="md">
            <Flex onClick={onOpen} cursor="pointer">
              <BiMenuAltRight color="#d82424" size="45px" />
              <Text fontSize="34px" color="#ffffff" fontFamily="Oswald">
                АНГИЛАЛ
              </Text>
            </Flex>
          </Heading>
        </Box>
        <Spacer />
        <Image
          display={{ base: "none", md: "block" }}
          width="350px"
          src={Logowhitelongtext}
        />
        <Spacer />
        <Flex>
          <Image
            width="56px"
            height="27px"
            className="transition group-hover:skew-y-6 duration-300"
            alt="mongolia"
            src={english}
          />
          <Box
            mx={{ base: "5px", md: "17px" }}
            bg="#111"
            width="3px"
            height="34px"
          />
          <Image
            width="56px"
            height="27px"
            className="transition group-hover:skew-y-6 duration-300"
            alt="mongolia"
            src={mongolia}
          />
        </Flex>
      </Flex>
      <Drawer
        size={{ base: "sm", md: "lg" }}
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#d82424">
          <DrawerHeader>
            <Flex
              height="125px"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              onClick={() => navigate("/home")}
            >
              <Image
                width={{ base: "250px", md: "350px" }}
                src={Logowhitelongtext}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex
              cursor="pointer"
              onClick={() => navigate("/home")}
              marginBottom="15px"
              className="group"
            >
              <Box
                marginTop={{ base: "15px", md: "30px" }}
                marginBottom="10px"
                marginRight={{ base: "20px", md: "40px" }}
                marginLeft={{ base: "25px", md: "50px" }}
                width={{ base: "33px", md: "65px" }}
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize={{ base: "25px", md: "40px" }}
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
                marginTop={{ base: "15px", md: "30px" }}
                marginBottom="10px"
                marginRight={{ base: "20px", md: "40px" }}
                marginLeft={{ base: "25px", md: "50px" }}
                width={{ base: "33px", md: "65px" }}
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize={{ base: "25px", md: "40px" }}
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
                marginTop={{ base: "15px", md: "30px" }}
                marginBottom="10px"
                marginRight={{ base: "20px", md: "40px" }}
                marginLeft={{ base: "25px", md: "50px" }}
                width={{ base: "33px", md: "65px" }}
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize={{ base: "25px", md: "40px" }}
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
                marginTop={{ base: "15px", md: "30px" }}
                marginBottom="10px"
                marginRight={{ base: "20px", md: "40px" }}
                marginLeft={{ base: "25px", md: "50px" }}
                width={{ base: "33px", md: "65px" }}
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize={{ base: "25px", md: "40px" }}
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
                marginTop={{ base: "15px", md: "30px" }}
                marginBottom="10px"
                marginRight={{ base: "20px", md: "40px" }}
                marginLeft={{ base: "25px", md: "50px" }}
                width={{ base: "33px", md: "65px" }}
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize={{ base: "25px", md: "40px" }}
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
                marginTop={{ base: "15px", md: "30px" }}
                marginBottom="10px"
                marginRight={{ base: "20px", md: "40px" }}
                marginLeft={{ base: "25px", md: "50px" }}
                width={{ base: "33px", md: "65px" }}
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize={{ base: "25px", md: "40px" }}
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
                marginTop={{ base: "15px", md: "30px" }}
                marginBottom="10px"
                marginRight={{ base: "20px", md: "40px" }}
                marginLeft={{ base: "25px", md: "50px" }}
                width={{ base: "33px", md: "65px" }}
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize={{ base: "25px", md: "40px" }}
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
                marginTop={{ base: "15px", md: "30px" }}
                marginBottom="10px"
                marginRight={{ base: "20px", md: "40px" }}
                marginLeft={{ base: "25px", md: "50px" }}
                width={{ base: "33px", md: "65px" }}
                height="4px"
                backgroundColor="#2a2a2a"
                className="group-hover:bg-[#ffffff] transform group-hover:translate-x-2 duration-300"
              />
              <Text
                fontSize={{ base: "25px", md: "40px" }}
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
