import { Box, Flex, Image, Text } from "@chakra-ui/react";
import AboutUsImg from "../assets/img/aboutus.png";

export default function AboutUs() {
  return (
    <>
      <Flex>
        <Flex direction="column">
          <Flex alignItems="center">
            <Box marginRight="30px" w="7px" h="75px" bg="#d82424" />
            <Text
              letterSpacing="1.58px"
              fontWeight="bold"
              fontSize="60px"
              color="#ffffff"
              fontFamily="Oswald"
            >
              БИДНИЙ ТУХАЙ
            </Text>
          </Flex>
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
        </Flex>
        <Flex alignItems="center" justifyContent="center" px="400px">
          <Image src={AboutUsImg} />
        </Flex>
      </Flex>
    </>
  );
}
