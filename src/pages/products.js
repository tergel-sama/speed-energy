import {
  Flex,
  Box,
  Text,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabIndicator,
  TabList,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import ProdTabInfo from "../components/prodtabinfo";

export default function Products() {
  return (
    <>
      <Header />
      <Layout>
        <Flex pt="200px" w="100%">
          <Flex alignItems="center">
            <Box marginRight="30px" w="7px" h="75px" bg="#d82424" />
            {/* <AnimationOnScroll animateIn="animate__fadeInDown"> */}
            <Text
              letterSpacing="1.58px"
              fontWeight="bold"
              fontSize="60px"
              color="#ffffff"
              fontFamily="Oswald"
            >
              МОТОЦИКЛ
            </Text>
            {/* </AnimationOnScroll> */}
          </Flex>
        </Flex>
        <Tabs py="100px" align="center" position="relative" variant="unstyled">
          <TabList fontFamily="Oswald">
            <Tab
              _selected={{ color: "#ffffff" }}
              letterSpacing="1.25px"
              fontWeight="bold"
              fontSize="50px"
            >
              OFFROAD
            </Tab>
            <Tab
              _selected={{ color: "#ffffff" }}
              letterSpacing="1.25px"
              fontWeight="bold"
              fontSize="50px"
            >
              ADV
            </Tab>
            <Tab
              _selected={{ color: "#ffffff" }}
              letterSpacing="1.25px"
              fontWeight="bold"
              fontSize="50px"
            >
              RETRO
            </Tab>
            <Tab
              _selected={{ color: "#ffffff" }}
              letterSpacing="1.25px"
              fontWeight="bold"
              fontSize="50px"
            >
              RALLY
            </Tab>
            <Tab
              _selected={{ color: "#ffffff" }}
              letterSpacing="1.25px"
              fontWeight="bold"
              fontSize="50px"
            >
              NK
            </Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="5px"
            bg="#ffffff"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProdTabInfo />
                <ProdTabInfo />
                <ProdTabInfo />
              </motion.div>
            </TabPanel>
            <TabPanel>
              <ProdTabInfo />
              <ProdTabInfo />
            </TabPanel>
            <TabPanel>
              <ProdTabInfo />
              <ProdTabInfo />
              <ProdTabInfo />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Layout>
      <Footer />
    </>
  );
}
