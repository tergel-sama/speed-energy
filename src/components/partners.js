import { Flex, Box, Text, Image, Spacer } from "@chakra-ui/react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Partner1 from "../assets/partners/1.png";
import Partner2 from "../assets/partners/2.png";
import Partner3 from "../assets/partners/3.png";
import Partner4 from "../assets/partners/4.png";
import Partner5 from "../assets/partners/5.png";
import Partner6 from "../assets/partners/6.png";
import Partner7 from "../assets/partners/7.png";
import Partner8 from "../assets/partners/8.png";
import Partner9 from "../assets/partners/9.png";

export default function Partners() {
  return (
    <Box my="175px">
      <Flex justifyContent="center">
        <Flex alignItems="center">
          <Box
            marginRight="30px"
            w={{ base: "4px", md: "7px" }}
            h={{ base: "45px", md: "75px" }}
            bg="#d82424"
          />
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <Text
              letterSpacing="1.58px"
              fontWeight="bold"
              fontSize={{ base: "35px", md: "60px" }}
              color="#ffffff"
              fontFamily="Oswald"
            >
              ХАМТРАГЧ БАЙГУУЛЛАГУУД
            </Text>
          </AnimationOnScroll>
        </Flex>
      </Flex>
      <Box my="70px" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Image
          p="20px"
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner1}
        />
        <Image
          p="20px"
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner2}
        />
        <Image
          p="20px"
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner3}
        />
        <Image
          p="20px"
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner4}
        />
        <Image
          p="20px"
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner5}
        />
        <Image
          p="20px"
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner6}
        />
        <Image
          p="20px"
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner7}
        />
        <Image
          p="20px"
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner1}
        />
      </Flex>
    </Box>
  );
}
