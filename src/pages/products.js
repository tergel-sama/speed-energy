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

const tabList = [
  { Text: "ADV" },
  { Text: "RETRO" },
  { Text: "RALLY" },
  { Text: "OFFROAD" },
];

const firstMoto = {
  ItemTitle: "500X EURO5",
  ItemTabList: [
    {
      Text: "Хэмжээ",
      Data: [
        {
          Info: "Урт X Өргөн X Өндөр:",
          Data: "2150×910×1450 мм",
        },
        {
          Info: "Тэнхлэг хоорондын зай :",
          Data: "1460 мм",
        },
        {
          Info: "Суудлын өндөр :",
          Data: "820 мм",
        },
        {
          Info: "Түлшний багтаамж :",
          Data: "20 л",
        },
        {
          Info: "Нийт жин :",
          Data: "178 кг",
        },
      ],
    },
    {
      Text: "Хөдөлгүүр",
      Data: [
        {
          Info: "Урт X Өргөн X Өндөр:",
          Data: "2150×910×1450 мм",
        },
        {
          Info: "Тэнхлэг хоорондын зай :",
          Data: "1460 мм",
        },
        {
          Info: "Суудлын өндөр :",
          Data: "820 мм",
        },
        {
          Info: "Түлшний багтаамж :",
          Data: "20 л",
        },
        {
          Info: "Нийт жин :",
          Data: "178 кг",
        },
      ],
    },
    {
      Text: "Эд анги",
      Data: [
        {
          Info: "Урт X Өргөн X Өндөр:",
          Data: "2150×910×1450 мм",
        },
        {
          Info: "Тэнхлэг хоорондын зай :",
          Data: "1460 мм",
        },
        {
          Info: "Суудлын өндөр :",
          Data: "820 мм",
        },
        {
          Info: "Түлшний багтаамж :",
          Data: "20 л",
        },
        {
          Info: "Нийт жин :",
          Data: "178 кг",
        },
      ],
    },
    {
      Text: "Тохиргоо",
      Data: [
        {
          Info: "Урт X Өргөн X Өндөр:",
          Data: "2150×910×1450 мм",
        },
        {
          Info: "Тэнхлэг хоорондын зай :",
          Data: "1460 мм",
        },
        {
          Info: "Суудлын өндөр :",
          Data: "820 мм",
        },
        {
          Info: "Түлшний багтаамж :",
          Data: "20 л",
        },
        {
          Info: "Нийт жин :",
          Data: "178 кг",
        },
      ],
    },
  ],
};

export default function Products() {
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
              МОТОЦИКЛ
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
            <TabPanel>
              <ProdTabInfo data={firstMoto} />
              <ProdTabInfo />
              <ProdTabInfo />
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
