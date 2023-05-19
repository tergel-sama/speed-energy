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

import libotka from "../assets/othertonog/libotka.png";
import tatlaga from "../assets/othertonog/tatlaga.png";

const tabList = [
  {
    Text: "Тоногууд",
    ItemList: [
      {
        ItemTitle: "",
        Img: libotka,
        ItemTabList: [
          {
            Text: "Либотка",
            Data: [
              {
                Info: "Материал :",
                Data: "Сентитик олс",
              },
              {
                Info: "Жин :",
                Data: "18 кг",
              },
              {
                Info: "Чадал :",
                Data: "12 волт 1200Lb 5450 кг",
              },
            ],
          },
        ],
      },
      {
        ItemTitle: "",
        Img: tatlaga,
        ItemTabList: [
          {
            Text: "Татлага",
            Data: [
              {
                Info: "Материал :",
                Data: "100% нилон",
              },
              {
                Info: "Хэмжээ :",
                Data: "Урт 7 метр, өргөн 75 мм",
              },
              {
                Info: "Даац :",
                Data: "8 тонн",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function OtherTonog() {
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
              АВТО ТОНОГЛОЛ
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
