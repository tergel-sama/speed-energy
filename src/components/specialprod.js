import $ from "jquery";
import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import Moto from "../assets/img/moto.png";

$(document).ready(function () {
  $("#leftPaneButton").click(function () {
    $("#leftPane").animate({ width: 0 }, 700);
    $("#rightPane").animate({ width: "100%" }, 700);
    $("#image1").css("visibility", "collapse");
    $("#image2").css("visibility", "visible");
  });

  $("#rightPaneButton").click(function () {
    $("#leftPane").animate({ width: "100%" }, 700);
    $("#rightPane").animate({ width: 0 }, 700);
    $("#image1").css("visibility", "visible");
    $("#image2").css("visibility", "collapse");
  });
});

export default function SpecialProd() {
  return (
    <>
      <body>
        <div class="flex h-screen relative overflow-hidden">
          <div id="leftPane" class="w-1/2 bg-[#111111] text-white  relative">
            <div
              id="leftPaneButton"
              class="absolute flex items-center h-screen right-0 w-48"
            >
              <div class="w-full h-48  flex items-center cursor-pointer transition duration-500 hover:bg-gray-300 bg-white text-black justify-center">
                АЯНЫ ЧИРГҮҮЛ
              </div>
            </div>
            <div class="flex  items-center justify-center   h-screen">
              <Stack
                px="120px"
                w="100%"
                direction={{ base: "column", md: "row" }}
              >
                <Flex flex={1} align={"center"}>
                  <Stack spacing={6} w={"full"} maxW={"lg"}>
                    <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                      <Text
                        as={"span"}
                        position={"relative"}
                        _after={{
                          content: "''",
                          width: "full",
                          height: useBreakpointValue({
                            base: "20%",
                            md: "30%",
                          }),
                          position: "absolute",
                          bottom: 1,
                          left: 0,
                          bg: "blue.400",
                          zIndex: -1,
                        }}
                      >
                        МОТОЦИКЛ
                      </Text>
                      <br />
                      <Text color="#13a4aa" as={"span"}>
                        KOVE
                      </Text>
                    </Heading>
                    <Text
                      fontSize={{ base: "md", lg: "lg" }}
                      color={"gray.500"}
                    >
                      Албан ёсны эрхтэйгээр манайд худалдаалж байна.
                    </Text>
                  </Stack>
                </Flex>
                <Flex
                  id="image1"
                  visibility="collapse"
                  paddingRight="120px"
                  flex={1}
                >
                  <Image alt={"Login Image"} objectFit={"cover"} src={Moto} />
                </Flex>
              </Stack>
            </div>
          </div>
          <div id="rightPane" class=" w-1/2 bg-[#ffffff] text-black  relative ">
            <div
              id="rightPaneButton"
              class="absolute flex items-center h-screen left-0 w-48"
            >
              <div class="w-full h-48   cursor-pointer transition duration-500 hover:bg-gray-700 bg-black text-white flex justify-center items-center">
                МОТОЦИКЛ
              </div>
            </div>
            <div class="flex items-center justify-center  h-screen">
              <Stack
                px="120px"
                w="100%"
                direction={{ base: "column", md: "row" }}
              >
                <Flex
                  id="image2"
                  visibility="collapse"
                  paddingLeft="120px"
                  flex={1}
                >
                  <Image alt={"Login Image"} objectFit={"cover"} src={Moto} />
                </Flex>
                <Flex flex={1} justify="right" align={"center"}>
                  <Stack textAlign="right" spacing={6} w={"full"} maxW={"lg"}>
                    <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                      <Text
                        as={"span"}
                        position={"relative"}
                        _after={{
                          content: "''",
                          width: "full",
                          height: useBreakpointValue({
                            base: "20%",
                            md: "30%",
                          }),
                          position: "absolute",
                          bottom: 1,
                          left: 0,
                          bg: "blue.400",
                          zIndex: -1,
                        }}
                      >
                        АЯНЫ ЧИРГҮҮЛ
                      </Text>
                      <br />
                      <Text color="rgb(210, 188, 160)" as={"span"}>
                        CONQUER FALCON
                      </Text>
                    </Heading>
                    <Text
                      fontSize={{ base: "md", lg: "lg" }}
                      color={"gray.500"}
                    >
                      Албан ёсны эрхтэйгээр манайд худалдаалж байна.
                    </Text>
                  </Stack>
                </Flex>
              </Stack>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
