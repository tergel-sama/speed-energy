import {
  Flex,
  Image,
  Spacer,
  Box,
  Text,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabList,
} from "@chakra-ui/react";

import moto from "../assets/img/moto.png";

export default function ProdTabInfo({ data }) {
  return (
    <>
      <Flex
        overflow="scroll"
        className="transition ease-in-out  hover:scale-105 duration-500"
        my="50px"
        rounded="md"
        p={{ base: "10px", md: "50px" }}
        bg="black"
      >
        <Flex mx="20px" flexBasis="30%">
          <Flex justifyContent="left" direction="column">
            <Text
              textAlign="left"
              color="#ffffff"
              fontFamily="Oswald"
              fontSize={{ base: "30px", md: "46px" }}
              fontWeight={900}
            >
              {data?.ItemTitle}
            </Text>
            <Box
              bg="linear-gradient(to right, #d82424 29%, rgba(255, 255, 255, 0) 83%)"
              h="4px"
              w="450px"
              mb="45px"
            />
            <Image src={moto} />
          </Flex>
        </Flex>
        <Flex px="30px" flexBasis="70%">
          <Tabs
            w="100%"
            isFitted
            align="left"
            position="relative"
            variant="unstyled"
          >
            <TabList fontFamily="Oswald">
              <Tab
                _selected={{ color: "#ffffff" }}
                letterSpacing="1.25px"
                fontWeight="bold"
                fontSize={{ base: "15px", md: "30px" }}
              >
                Хэмжээ
              </Tab>
              <Tab
                _selected={{ color: "#ffffff" }}
                letterSpacing="1.25px"
                fontWeight="bold"
                fontSize={{ base: "15px", md: "30px" }}
              >
                Хөдөлгүүр
              </Tab>
              <Tab
                _selected={{ color: "#ffffff" }}
                letterSpacing="1.25px"
                fontWeight="bold"
                fontSize={{ base: "15px", md: "30px" }}
              >
                Явах эд анги
              </Tab>
              <Tab
                _selected={{ color: "#ffffff" }}
                letterSpacing="1.25px"
                fontWeight="bold"
                fontSize={{ base: "15px", md: "30px" }}
              >
                Тохиргоо
              </Tab>
            </TabList>
            <Box h="1px" my={{ base: "16px", md: "32px" }} bgColor="#d82424" />
            <TabPanels>
              <TabPanel>
                <Flex my="11px" fontFamily="Oswald">
                  <Text
                    letterSpacing="0.75px"
                    fontWeight="normal"
                    color="#ffffff"
                    fontSize={{ base: "13px", md: "26px" }}
                  >
                    Урт x Жин x Өндөр :
                  </Text>
                  <Spacer />
                  <Text
                    letterSpacing="0.75px"
                    fontWeight="normal"
                    color="#ffffff"
                    fontSize={{ base: "13px", md: "26px" }}
                  >
                    2168×805×1265mm
                  </Text>
                </Flex>
                <Flex my="11px" fontFamily="Oswald">
                  <Text
                    letterSpacing="0.75px"
                    fontWeight="normal"
                    color="#ffffff"
                    fontSize={{ base: "13px", md: "26px" }}
                  >
                    Тэнхлэг хоорондын зай :
                  </Text>
                  <Spacer />
                  <Text
                    letterSpacing="0.75px"
                    fontWeight="normal"
                    color="#ffffff"
                    fontSize={{ base: "13px", md: "26px" }}
                  >
                    1490mm
                  </Text>
                </Flex>
                <Flex my="11px" fontFamily="Oswald">
                  <Text
                    letterSpacing="0.75px"
                    fontWeight="normal"
                    color="#ffffff"
                    fontSize={{ base: "13px", md: "26px" }}
                  >
                    Суудлын өндөр :
                  </Text>
                  <Spacer />
                  <Text
                    letterSpacing="0.75px"
                    fontWeight="normal"
                    color="#ffffff"
                    fontSize={{ base: "13px", md: "26px" }}
                  >
                    960mm (Front)
                  </Text>
                </Flex>
                <Flex my="11px" fontFamily="Oswald">
                  <Text
                    letterSpacing="0.75px"
                    fontWeight="normal"
                    color="#ffffff"
                    fontSize={{ base: "13px", md: "26px" }}
                  >
                    Түлшний багтаамж :
                  </Text>
                  <Spacer />
                  <Text
                    letterSpacing="0.75px"
                    fontWeight="normal"
                    color="#ffffff"
                    fontSize={{ base: "13px", md: "26px" }}
                  >
                    6L
                  </Text>
                </Flex>
                <Flex my="11px" fontFamily="Oswald">
                  <Text
                    letterSpacing="0.75px"
                    fontWeight="normal"
                    color="#ffffff"
                    fontSize={{ base: "13px", md: "26px" }}
                  >
                    Нийт жин (Түлшний савгүй) :
                  </Text>
                  <Spacer />
                  <Text
                    letterSpacing="0.75px"
                    fontWeight="normal"
                    color="#ffffff"
                    fontSize={{ base: "13px", md: "26px" }}
                  >
                    98kg
                  </Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
}
