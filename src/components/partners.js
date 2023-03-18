import { Flex, Box, Text, Image, Spacer } from "@chakra-ui/react";

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
    <Box mt="175px">
      <Flex justifyContent="center">
        <Flex alignItems="center">
          <Box marginRight="30px" w="7px" h="75px" bg="#d82424" />
          <Text
            letterSpacing="1.58px"
            fontWeight="bold"
            fontSize="60px"
            color="#ffffff"
            fontFamily="Oswald"
          >
            ХАМТРАГЧ БАЙГУУЛЛАГУУД
          </Text>
        </Flex>
      </Flex>
      <Flex paddingTop="90px" justifyContent="center" alignItems="center">
        <Image src={Partner1} />
        <Spacer />
        <Image src={Partner2} />
        <Spacer />
        <Image src={Partner3} />
        <Spacer />
        <Image src={Partner4} />
        <Spacer />
        <Image src={Partner5} />
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Image src={Partner6} />
        <Spacer />
        <Image src={Partner7} />
        <Spacer />
        <Image src={Partner8} />
        <Spacer />
        <Image src={Partner9} />
      </Flex>
      <Flex justifyContent="center">
        <Text
          width="1300px"
          marginTop="100px"
          color="#ffffff"
          fontSize="25px"
          fontFamily="Oswald"
          lineHeight="2"
          letterSpacing="0.63px"
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla
        </Text>
      </Flex>
    </Box>
  );
}
