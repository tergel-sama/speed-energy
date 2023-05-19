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

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import ProdTabInfo from "../components/prodtabinfo";

import amar from "../assets/amar/amar.png";

const tabList = [
  {
    Text: "LC200",
    ItemList: [
      {
        ItemTitle: "",
        Img: amar,
        ItemTabList: [
          {
            Text: "Урд амартизатор",
            Data: [
              {
                Info: "Материал :",
                Data: "6061 маркийн хөнгөн цагаан",
              },
              {
                Info: "Жин :",
                Data: "10 кг",
              },
              {
                Info: "Өнгө :",
                Data: "Улаан хар",
              },
              {
                Info: "Бүрдэл хэсэг :",
                Data: "3 хэсэг салдаг",
              },
              {
                Info: "Баталгаат хугацаа :",
                Data: "10'000 км",
              },
              {
                Info: "Тэсвэр :",
                Data: "-40, +300C",
              },
              {
                Info: "Тохиргоо :",
                Data: "Ребаунт, Компрессор хосолсон",
              },
              {
                Info: "Ашиглалтын хугацаа :",
                Data: "20 жил",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function Amar() {
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
            {/* <AnimationOnScroll animateIn="animate__fadeInDown"> */}
            <Text
              fontWeight="bold"
              fontSize={{ base: "35px", md: "60px" }}
              letterSpacing="1.58px"
              color="#ffffff"
              fontFamily="Oswald"
            >
              АМАРТИЗАТОР
            </Text>
            {/* </AnimationOnScroll> */}
          </Flex>
        </Flex>
        <Tabs py="100px" align="center" position="relative" variant="unstyled">
          <Box overflow="auto">
            <TabList w="max-content" fontFamily="Oswald">
              {tabList.map((item, index) => (
                <Tab
                  key={index}
                  _selected={{ color: "#ffffff" }}
                  letterSpacing="1.25px"
                  fontWeight="bold"
                  fontSize={{ base: "25px", md: "50px" }}
                >
                  {item.Text}
                </Tab>
              ))}
            </TabList>
          </Box>
          <TabIndicator
            mt="-1.5px"
            height="5px"
            bg="#ffffff"
            borderRadius="1px"
          />
          <TabPanels>
            {tabList?.map((item) => (
              <TabPanel>
                {item?.ItemList?.map((item) => (
                  <ProdTabInfo data={item} />
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Layout>
      <Footer />
    </>
  );
}
