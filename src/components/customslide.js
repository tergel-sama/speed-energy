import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { EffectCreative } from "swiper";
import { AiOutlineDoubleRight } from "react-icons/ai";
import anime from "animejs/lib/anime.es.js";

import hoyrzuu from "../assets/img/hoyrzuu.png";
import jeep from "../assets/img/jeep.png";
import patrol from "../assets/img/patrol.png";

import "swiper/css";
import "swiper/css/effect-creative";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    anime({
      targets: "#leftcarrow",
      translateX: 50,
      duration: 1350,
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
    });
  }, []);

  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
      >
        <SwiperSlide>
          <Box bg="#111111" h={{ base: "unset", md: "100vh" }} w="100%">
            <Flex
              direction={{ base: "column-reverse", md: "row" }}
              px="20px"
              alignItems="center"
            >
              <Flex
                py={{ base: "80px", md: "150px" }}
                marginRight={{ base: "15px", md: "185px" }}
                alignItems="center"
                justifyContent="center"
                flexBasis="50%"
              >
                <Image src={hoyrzuu} />
              </Flex>
              <Flex
                marginRight={{ base: "15px", md: "185px" }}
                justifyContent="center"
                alignItems="center"
                direction="column"
                flexBasis="50%"
              >
                <Flex alignItems="center">
                  <Text
                    fontSize={{ base: "50px", md: "90px" }}
                    color="#ffffff"
                    letterSpacing="2.45px"
                    fontWeight={900}
                    fontStyle="italic"
                  >
                    OFFROAD
                  </Text>
                  <Text
                    ml={{ base: "10px", md: "30px" }}
                    fontSize={{ base: "30px", md: "90px" }}
                    color="#ffffff"
                    letterSpacing="2.45px"
                    fontWeight={900}
                    fontStyle="italic"
                  >
                    <AiOutlineDoubleRight id="leftcarrow" />
                  </Text>
                </Flex>
                <Box
                  w={{ base: "200px", md: "450px" }}
                  h={{ base: "5px", md: "10px" }}
                  backgroundImage="linear-gradient(to right, #d82424 19%, rgba(255, 255, 255, 0) 83%)"
                />
              </Flex>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box bg="#111111" h={{ base: "unset", md: "100vh" }} w="100%">
            <Flex
              direction={{ base: "column-reverse", md: "row" }}
              px="20px"
              alignItems="center"
            >
              <Flex
                py={{ base: "80px", md: "150px" }}
                marginRight={{ base: "15px", md: "185px" }}
                alignItems="center"
                justifyContent="center"
                flexBasis="50%"
              >
                <Image src={jeep} />
              </Flex>
              <Flex
                marginRight={{ base: "15px", md: "185px" }}
                justifyContent="center"
                alignItems="center"
                direction="column"
                flexBasis="50%"
              >
                <Flex alignItems="center">
                  <Text
                    fontSize={{ base: "50px", md: "90px" }}
                    color="#ffffff"
                    letterSpacing="2.45px"
                    fontWeight={900}
                    fontStyle="italic"
                  >
                    WILDERNESS
                  </Text>
                  <Text
                    ml={{ base: "10px", md: "30px" }}
                    fontSize={{ base: "30px", md: "90px" }}
                    color="#ffffff"
                    letterSpacing="2.45px"
                    fontWeight={900}
                    fontStyle="italic"
                  >
                    <AiOutlineDoubleRight id="leftcarrow" />
                  </Text>
                </Flex>
                <Box
                  w={{ base: "200px", md: "450px" }}
                  h={{ base: "5px", md: "10px" }}
                  backgroundImage="linear-gradient(to right, #d82424 19%, rgba(255, 255, 255, 0) 83%)"
                />
              </Flex>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box bg="#111111" h={{ base: "unset", md: "100vh" }} w="100%">
            <Flex
              direction={{ base: "column-reverse", md: "row" }}
              px="20px"
              alignItems="center"
            >
              <Flex
                py={{ base: "80px", md: "150px" }}
                marginRight={{ base: "15px", md: "185px" }}
                alignItems="center"
                justifyContent="center"
                flexBasis="50%"
              >
                <Image src={patrol} />
              </Flex>
              <Flex
                marginRight={{ base: "15px", md: "185px" }}
                justifyContent="center"
                alignItems="center"
                direction="column"
                flexBasis="50%"
              >
                <Flex alignItems="center">
                  <Text
                    fontSize={{ base: "50px", md: "90px" }}
                    color="#ffffff"
                    letterSpacing="2.45px"
                    fontWeight={900}
                    fontStyle="italic"
                  >
                    DOMINANCE
                  </Text>
                </Flex>
                <Box
                  w={{ base: "200px", md: "450px" }}
                  h={{ base: "5px", md: "10px" }}
                  backgroundImage="linear-gradient(to right, #d82424 19%, rgba(255, 255, 255, 0) 83%)"
                />
              </Flex>
            </Flex>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
