import { Text, Flex, Image, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import english from "../assets/img/english.png";
import mongolia from "../assets/img/mongolia.png";
import langhome from "../assets/img/langhome.png";

export default function Lang() {
  const navigate = useNavigate();

  return (
    <Flex
      bgImage={langhome}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      className="h-screen"
      justifyContent="center"
      alignItems="center"
      fontFamily="Oswald"
      w="100%"
    >
      <Flex direction="column">
        <Flex
          onClick={() => navigate("/home")}
          cursor="pointer"
          className="group"
          py="5px"
        >
          <Text
            fontWeight={600}
            pr="33px"
            fontSize="29px"
            color="#ffffff"
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
        <Flex
          onClick={() => navigate("/home")}
          cursor="pointer"
          className="group"
          py="5px"
        >
          <Text
            fontWeight={600}
            pr="40px"
            fontSize="29px"
            color="#ffffff"
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
  );
}
