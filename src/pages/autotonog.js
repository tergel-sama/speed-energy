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

import hoidguper from "../assets/autotonog/hoidguper.png";
import urdguper from "../assets/autotonog/urdguper.png";
import gishguur from "../assets/autotonog/gishguur.png";

import patrolhoidguper from "../assets/autotonog/patrolhoidguper.png";
import patrolurdguper from "../assets/autotonog/patrolurdguper.png";
import patrolgishguur from "../assets/autotonog/patrolgishguur.png";

const tabList = [
  {
    Text: "LC200",
    ItemList: [
      {
        ItemTitle: "",
        Img: hoidguper,
        ItemTabList: [
          {
            Text: "Хойд Гупер",
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
                Data: "Бүх өнгөний сонголттой",
              },
              {
                Info: "Бүрдэл хэсэг :",
                Data: "3 хэсэг салдаг",
              },
            ],
          },
        ],
      },
      {
        ItemTitle: "",
        Img: urdguper,
        ItemTabList: [
          {
            Text: "Урд Гупер",
            Data: [
              {
                Info: "Материал :",
                Data: "6061 маркийн хөнгөн цагаан",
              },
              {
                Info: "Жин :",
                Data: "15 кг",
              },
              {
                Info: "Өнгө :",
                Data: "Бүх өнгөний сонголттой",
              },
              {
                Info: "Бүрдэл хэсэг :",
                Data: "4 хэсэг салдаг",
              },
            ],
          },
        ],
      },
      {
        ItemTitle: "",
        Img: gishguur,
        ItemTabList: [
          {
            Text: "Гишгүүр",
            Data: [
              {
                Info: "Материал :",
                Data: "Төмөр болон хөнгөн цагаан",
              },
              {
                Info: "Жин :",
                Data: "9 кг X 2",
              },
              {
                Info: "Өнгө :",
                Data: "Хар",
              },
              {
                Info: "Бүрдэл хэсэг :",
                Data: "3",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    Text: "PATROL Y62",
    ItemList: [
      {
        ItemTitle: "",
        Img: patrolhoidguper,
        ItemTabList: [
          {
            Text: "Хойд Гупер",
            Data: [
              {
                Info: "Материал :",
                Data: "6061 маркийн хөнгөн цагаан",
              },
              {
                Info: "Жин :",
                Data: "13 кг",
              },
              {
                Info: "Өнгө :",
                Data: "Бүх өнгөний сонголттой",
              },
              {
                Info: "Бүрдэл хэсэг :",
                Data: "3 хэсэг салдаг",
              },
            ],
          },
        ],
      },
      {
        ItemTitle: "",
        Img: patrolurdguper,
        ItemTabList: [
          {
            Text: "Урд Гупер",
            Data: [
              {
                Info: "Материал :",
                Data: "6061 маркийн хөнгөн цагаан",
              },
              {
                Info: "Жин :",
                Data: "18 кг",
              },
              {
                Info: "Өнгө :",
                Data: "Бүх өнгөний сонголттой",
              },
              {
                Info: "Бүрдэл хэсэг :",
                Data: "4 хэсэг салдаг",
              },
            ],
          },
        ],
      },
      {
        ItemTitle: "",
        Img: patrolgishguur,
        ItemTabList: [
          {
            Text: "Гишгүүр",
            Data: [
              {
                Info: "Материал :",
                Data: "Төмөр болон хөнгөн цагаан",
              },
              {
                Info: "Жин :",
                Data: "12 кг X 2",
              },
              {
                Info: "Өнгө :",
                Data: "Хар",
              },
              {
                Info: "Бүрдэл хэсэг :",
                Data: "3",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function AutoTonog() {
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
