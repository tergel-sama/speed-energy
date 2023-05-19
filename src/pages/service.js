import { Flex, Box, Text, Image } from "@chakra-ui/react";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

import serviceImg from "../assets/img/service.png";

export default function Service() {
  return (
    <>
      <Header />
      <Layout>
        <Flex pt={{ base: "100px", md: "200px" }} w="100%">
          <Flex alignItems="center">
            <Box
              w={{ base: "4px", md: "7px" }}
              h={{ base: "45px", md: "75px" }}
              marginRight="30px"
              bg="#d82424"
            />
            <Text
              fontWeight="bold"
              fontSize={{ base: "35px", md: "60px" }}
              letterSpacing="1.58px"
              color="#ffffff"
              fontFamily="Oswald"
            >
              ЗАСВАР ҮЙЛЧИЛГЭЭ
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Text
            w="1200px"
            fontWeight="medium"
            fontSize={{ base: "15px", md: "20px" }}
            letterSpacing="1.58px"
            color="#ffffff"
            fontFamily="Oswald"
            textAlign="center"
            py="120px"
          >
            Манай байгууллага нь бүх төрлийн бартаат замын тоног засвар
            үйлчилгээ хийхээс гадна аялалын хэрэгсэл, аяны чиргүүл,Kove брендын
            мотоциклыг худалдаалж байна.
          </Text>
        </Flex>
        <Flex mb="100px" alignItems="center" justifyContent="center">
          <Image src={serviceImg} />
        </Flex>
      </Layout>
      <Footer />
    </>
  );
}
