import { Text, Flex, Image, Box } from "@chakra-ui/react";
import Layout from "../components/layout";
import english from "../assets/img/english.png";
import mongolia from "../assets/img/mongolia.png";

export default function Lang() {
  return (
    <Layout>
      <Flex justifyContent="center" alignItems="center" w="100%" height="100%">
        <Flex direction="column">
          <Flex className="group" py="5px">
            <Text
              fontWeight={600}
              pr="33px"
              fontSize="29px"
              className="group-hover:text-[#d82424] transition group-hover:scale-110 duration-300"
            >
              МОНГОЛ
            </Text>
            <Image
              className="transition group-hover:skew-y-6 duration-300"
              alt="mongolia"
              src={mongolia}
            />
          </Flex>
          <Box my="10px" width="240px" border="1px solid #d82424" />
          <Flex className="group" py="5px">
            <Text
              fontWeight={600}
              pr="40px"
              fontSize="29px"
              className="group-hover:text-[#d82424] transition group-hover:scale-110 duration-300"
            >
              ENGLISH
            </Text>
            <Image
              className="transition group-hover:skew-y-6 duration-300"
              alt="mongolia"
              src={english}
            />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
