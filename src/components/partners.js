import { Flex, Box, Text, Image, Spacer } from "@chakra-ui/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <Swiper
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 300,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="transition ease-in-out  hover:scale-105 duration-500"
            src={Partner1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="transition ease-in-out  hover:scale-105 duration-500"
            src={Partner2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="transition ease-in-out  hover:scale-105 duration-500"
            src={Partner3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="transition ease-in-out  hover:scale-105 duration-500"
            src={Partner4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="transition ease-in-out  hover:scale-105 duration-500"
            src={Partner5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="transition ease-in-out  hover:scale-105 duration-500"
            src={Partner6}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="transition ease-in-out  hover:scale-105 duration-500"
            src={Partner7}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="transition ease-in-out  hover:scale-105 duration-500"
            src={Partner1}
          />
        </SwiperSlide>
      </Swiper>
      {/* <Flex
        flexWrap={"wrap"}
        paddingTop="90px"
        justifyContent="center"
        alignItems="center"
        gap={"20px"}
      >
        <Image
          margin={"20px"}
          w={"300px"}
          p={"20px"}
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner1}
        />
        <Spacer />
        <Image
          margin={"20px"}
          w={"300px"}
          p={"20px"}
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner2}
        />
        <Spacer />
        <Image
          margin={"20px"}
          w={"300px"}
          p={"20px"}
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner3}
        />
        <Spacer />
        <Image
          margin={"20px"}
          w={"300px"}
          p={"20px"}
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner4}
        />
        <Spacer />
        <Image
          margin={"20px"}
          w={"300px"}
          p={"20px"}
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner5}
        />
        <Image
          margin={"20px"}
          w={"300px"}
          p={"20px"}
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner6}
        />
        <Spacer />
        <Image
          margin={"20px"}
          w={"300px"}
          p={"20px"}
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner7}
        />
        <Spacer />
        <Image
          margin={"20px"}
          w={"300px"}
          p={"20px"}
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner8}
        />
        <Spacer />
        <Image
          margin={"20px"}
          w={"300px"}
          p={"20px"}
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner9}
        />
        <Spacer />
        <Image
          margin={"20px"}
          w={"300px"}
          p={"20px"}
          className="transition ease-in-out  hover:scale-105 duration-500"
          src={Partner9}
        />
      </Flex> */}
      <Flex justifyContent="center">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <Text
            marginTop="100px"
            color="#ffffff"
            fontSize="25px"
            fontFamily="Oswald"
            lineHeight="2"
            letterSpacing="0.63px"
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
          </Text>
        </AnimationOnScroll>
      </Flex>
    </Box>
  );
}
