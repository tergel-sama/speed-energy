import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import AboutUsImg from "../assets/img/aboutus.jpg";

export default function AboutUs() {
  return (
    <>
      <Flex>
        <Flex flexBasis="50%" direction="column">
          <Flex alignItems="center">
            <Box marginRight="30px" w="7px" h="75px" bg="#d82424" />
            <AnimationOnScroll animateIn="animate__fadeInDown">
              <Text
                letterSpacing="1.58px"
                fontWeight="bold"
                fontSize="60px"
                color="#ffffff"
                fontFamily="Oswald"
              >
                БИДНИЙ ТУХАЙ
              </Text>
            </AnimationOnScroll>
          </Flex>
          <AnimationOnScroll delay={500} animateIn="animate__fadeInLeft">
            <Text
              marginTop="100px"
              color="#ffffff"
              fontSize="25px"
              fontFamily="Oswald"
              lineHeight="2"
              letterSpacing="0.63px"
              pr="50px"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore
            </Text>
          </AnimationOnScroll>
        </Flex>
        <Flex
          flexBasis="50%"
          px="10px"
          alignItems="center"
          justifyContent="center"
        >
          <AnimationOnScroll delay={500} animateIn="animate__fadeIn">
            <Image src={AboutUsImg} />
          </AnimationOnScroll>
        </Flex>
      </Flex>
    </>
  );
}
