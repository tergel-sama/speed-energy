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
            {data?.ItemTitle.length === 0 ? null : (
              <Box
                bg="linear-gradient(to right, #d82424 29%, rgba(255, 255, 255, 0) 83%)"
                h="4px"
                w="450px"
                mb="45px"
              />
            )}
            <Image m="auto" src={data?.Img} />
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
              {data?.ItemTabList?.map((item, index) => (
                <Tab
                  key={index}
                  _selected={{ color: "#ffffff" }}
                  letterSpacing="1.25px"
                  fontWeight="bold"
                  fontSize={{ base: "15px", md: "30px" }}
                >
                  {item?.Text}
                </Tab>
              ))}
            </TabList>
            <Box h="1px" my={{ base: "16px", md: "32px" }} bgColor="#d82424" />
            <TabPanels>
              {data?.ItemTabList?.map((item, index) => (
                <TabPanel key={index}>
                  {item?.Data?.map((item) => (
                    <Flex my="11px" fontFamily="Oswald">
                      <Text
                        letterSpacing="0.75px"
                        fontWeight="normal"
                        color="#ffffff"
                        fontSize={{ base: "13px", md: "26px" }}
                      >
                        {item?.Info}
                      </Text>
                      <Spacer />
                      <Text
                        letterSpacing="0.75px"
                        fontWeight="normal"
                        color="#ffffff"
                        fontSize={{ base: "13px", md: "26px" }}
                      >
                        {item?.Data}
                      </Text>
                    </Flex>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
}
