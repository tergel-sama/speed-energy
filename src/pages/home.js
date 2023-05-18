import { Flex, Box, Text } from "@chakra-ui/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Layout from "../components/layout";
import Header from "../components/header";
import CustomSilder from "../components/customslide";
import AboutUs from "../components/aboutus";
import SpecialProd from "../components/specialprod";
import Partners from "../components/partners";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <CustomSilder />
      <Layout>
        <AboutUs />
      </Layout>
      <Flex
        display={{ base: "none", md: "flex" }}
        pt="200px"
        justifyContent="center"
        w="100%"
      >
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
              ОНЦЛОХ БҮТЭЭГДЭХҮҮН
            </Text>
          </AnimationOnScroll>
        </Flex>
      </Flex>
      <Box display={{ base: "none", md: "block" }}>
        <SpecialProd />
      </Box>
      <Layout>
        <Partners />
      </Layout>
      <Footer />
    </>
  );
}
