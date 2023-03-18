import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { EffectCreative } from "swiper";

import Slider1car from "../assets/img/slider1car.png";

import "swiper/css";
import "swiper/css/effect-creative";

export default function App() {
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
          <Box bg="#111111" height="900px" w="1920px">
            <Flex>
              <Flex>
                <Image src={Slider1car} />
              </Flex>
              <Flex
                marginRight="185px"
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                <Text
                  fontSize="90px"
                  color="#ffffff"
                  letterSpacing="2.45px"
                  fontWeight={900}
                  fontStyle="italic"
                >
                  OFFROAD
                </Text>
                <Box
                  w="450px"
                  h="10px"
                  backgroundImage="linear-gradient(to right, #d82424 19%, rgba(255, 255, 255, 0) 83%)"
                />
              </Flex>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box bg="#111111" height="900px" w="1920px">
            <Flex>
              <Flex>
                <Image src={Slider1car} />
              </Flex>
              <Flex
                marginRight="185px"
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                <Text
                  fontSize="90px"
                  color="#ffffff"
                  letterSpacing="2.45px"
                  fontWeight={900}
                  fontStyle="italic"
                >
                  МОТОЦИКЛ
                </Text>
                <Box
                  w="450px"
                  h="10px"
                  backgroundImage="linear-gradient(to right, #d82424 19%, rgba(255, 255, 255, 0) 83%)"
                />
              </Flex>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box bg="#111111" height="900px" w="1920px">
            <Flex>
              <Flex>
                <Image src={Slider1car} />
              </Flex>
              <Flex
                marginRight="185px"
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                <Text
                  fontSize="90px"
                  color="#ffffff"
                  letterSpacing="2.45px"
                  fontWeight={900}
                  fontStyle="italic"
                >
                  АЯНЫ ЧИРГҮҮЛ
                </Text>
                <Box
                  w="450px"
                  h="10px"
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
