import { Box, Flex, Text } from "@chakra-ui/react";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function AboutUs() {
  return (
    <>
      <Flex direction={{ base: "column", md: "row" }}>
        <Flex direction="column">
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
                БИДНИЙ ТУХАЙ
              </Text>
            </AnimationOnScroll>
          </Flex>
          <AnimationOnScroll delay={500} animateIn="animate__fadeInLeft">
            <Text
              marginTop={{ base: "40px", md: "100px" }}
              color="#ffffff"
              fontSize={{ base: "15px", md: "25px" }}
              fontFamily="Oswald"
              lineHeight="2"
              letterSpacing="0.63px"
              pr={{ md: "50px" }}
              pb={{ base: "30px" }}
            >
              Манай компани нь 2014 онд байгуулагдан автомашин сонирхогчдод
              зориулан дэлхийн алдартай бренд бүтээгдэхүүнүүдийг Монгол Улсын
              зах зээлд амжилттай нэвтрүүлэн автомашины эрин зуунд дахин
              давтагдашгүй сонгодог хийц загвар бүхий бүтээгдэхүүнийг зохион
              бүтээж , оюуны өмчөөр патентжуулан эзэмшиж байна. Өнгөрсөн
              хугацаанд бидний бүтээгдэхүүн чанар болон стандартын шаардлага
              хангасан автомашины номер 1 брэнд болж өөрсдийн байр суурийг
              хэзээний эзэлж чадсандаа бахархалтай байна . Аюулгүй тав тухыг MR
              , K-MAN ,CONQUER FALCON, MARKMA, BLACK BEAR, KOVE MOTO ,AP RACING
              ,SPEED RACING, K&N , PELLIOT -оос мэдрээрэй.
            </Text>
          </AnimationOnScroll>
        </Flex>
      </Flex>
    </>
  );
}
