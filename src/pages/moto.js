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

import x500Euro5 from "../assets/moto/500xeuro5.png";
import x500singleswingarm from "../assets/moto/500xsingleswingarm.png";
import x500 from "../assets/moto/500x.png";
import f500 from "../assets/moto/500f.png";
import f400scrambler from "../assets/moto/400fscrambler.png";
import f321 from "../assets/moto/321f.png";

const tabList = [
  {
    Text: "ADV",
    ItemList: [
      {
        ItemTitle: "500X EURO5",
        Img: x500Euro5,
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
                Info: "Хөдөлгүүрийн төрөл :",
                Data: "Хос цилиндр, DOHC, Усан хөргүүр,Нэг цилиндрт 4 хавхлага",
              },
              {
                Info: "Хөдөлгүүрийн багтаамж :",
                Data: "471cc",
              },
              {
                Info: "Ignition method :",
                Data: "EFI",
              },
              {
                Info: "Гаргах дээд хүч :",
                Data: "35KW/8500rpm",
              },
              {
                Info: "Эргэлтийн дээд хүч :",
                Data: "43N·m/7500rpm",
              },
              {
                Info: "Шахалтын харьцаа :",
                Data: "10.7:1",
              },
              {
                Info: "Араа :",
                Data: "6 араа, гинж хөтлөгчтэй",
              },
              {
                Info: "Дээд хурд :",
                Data: "170 км/ц",
              },
              {
                Info: "0-100 км/ц хурд авах хугацаа :",
                Data: "6 сек",
              },
              {
                Info: "Түлшний зарцуулалт :",
                Data: "4.2л/100 км",
              },
            ],
          },
          {
            Text: "Эд анги",
            Data: [
              {
                Info: "Газар хоорондын зай :",
                Data: "210 мм",
              },
              {
                Info: "Урд хэсэг :",
                Data: "41мм KYB урвуу сэрээ, Олон тохируулгатай",
              },
              {
                Info: "Арын хэсэг :",
                Data: "Олон тохируулгатай KYB моношоктой хөнгөн цагаан дүүжин гар",
              },
              {
                Info: "Трейл :",
                Data: "106mm",
              },
              {
                Info: "Рэйк :",
                Data: "25.5°",
              },
            ],
          },
          {
            Text: "Тохиргоо",
            Data: [
              {
                Info: "Урд тормоз :",
                Data: "NISSIN, 300 мм-ийн хос диск, хос шахуурга, хос калипер, ABS",
              },
              {
                Info: "Хойд тормоз :",
                Data: "NISSIN, 240мм дан диск, бүлүүр, калипер, ABS",
              },
              {
                Info: "Урд дугуй :",
                Data: "Пирелли Метезеллер, 110/80-19",
              },
              {
                Info: "Хойд дугуй :",
                Data: "Пирелли Метезеллер, 150/70-17",
              },
              {
                Info: "Бусад :",
                Data: "Яаралтай тусламжийн гэрэл, USB цэнэглэгчийн порт",
              },
            ],
          },
        ],
      },
      {
        ItemTitle: "500X SINGLE SWING ARM",
        Img: x500singleswingarm,
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
                Info: "Хөдөлгүүрийн төрөл :",
                Data: "Хос цилиндр, DOHC, Усан хөргүүр,Нэг цилиндрт 4 хавхлага",
              },
              {
                Info: "Хөдөлгүүрийн багтаамж :",
                Data: "471cc",
              },
              {
                Info: "Ignition method :",
                Data: "EFI",
              },
              {
                Info: "Гаргах дээд хүч :",
                Data: "35KW/8500rpm",
              },
              {
                Info: "Эргэлтийн дээд хүч :",
                Data: "43N·m/7500rpm",
              },
              {
                Info: "Шахалтын харьцаа :",
                Data: "10.7:1",
              },
              {
                Info: "Араа :",
                Data: "6 араа, Гинжин хөтлөгч",
              },
              {
                Info: "Дээд хурд :",
                Data: "170 км/ц",
              },
              {
                Info: "0-100 км/ц хурд авах хугацаа :",
                Data: "6 сек",
              },
              {
                Info: "Түлшний зарцуулалт :",
                Data: "4.2л/100 км",
              },
            ],
          },
          {
            Text: "Эд анги",
            Data: [
              {
                Info: "Газар хоорондын зай :",
                Data: "210 мм",
              },
              {
                Info: "Урд хэсэг :",
                Data: "41мм KYB урвуу сэрээ, Олон тохируулгатай",
              },
              {
                Info: "Арын хэсэг :",
                Data: "Олон тохируулгатай KYB моношоктой хөнгөн цагаан дүүжин гар",
              },
              {
                Info: "Трейл :",
                Data: "105mm",
              },
              {
                Info: "Рэйк :",
                Data: "25.5°",
              },
            ],
          },
          {
            Text: "Тохиргоо",
            Data: [
              {
                Info: "Урд тормоз :",
                Data: "NISSIN, 300 мм 2 диск, 2 поршений калипер/ABS",
              },
              {
                Info: "Хойд тормоз :",
                Data: "NISSIN, 240 мм-ийн нэг диск, нэг поршений калипер/ABS",
              },
              {
                Info: "Урд дугуй :",
                Data: "Пирелли Метезеллер, 110/80-19",
              },
              {
                Info: "Хойд дугуй :",
                Data: "Pirelli Metezeller, 150/70-17R",
              },
              {
                Info: "Instrumentation :",
                Data: "LED",
              },
              {
                Info: "Бусад :",
                Data: "Яаралтай тусламжийн гэрэл, USB цэнэглэгчийн порт",
              },
            ],
          },
        ],
      },
      {
        ItemTitle: "510X",
        Img: x500,
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
                Data: "1479 мм",
              },
              {
                Info: "Суудлын өндөр :",
                Data: "830 мм",
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
                Info: "Хөдөлгүүрийн төрөл :",
                Data: "Хос цилиндртэй, босоо, DOHC, шингэн хөргөлттэй",
              },
              {
                Info: "Хөдөлгүүрийн багтаамж :",
                Data: "498 cc",
              },
              {
                Info: "Ignition method :",
                Data: "EFI (BOSCH)",
              },
              {
                Info: "Гаргах дээд хүч :",
                Data: "35KW/8500rpm",
              },
              {
                Info: "Эргэлтийн дээд хүч :",
                Data: "43N·m/6500rpm",
              },
              {
                Info: "Араа :",
                Data: "Гинжин хөтлөгч",
              },
              {
                Info: "Дээд хурд :",
                Data: "170 км/ц",
              },
              {
                Info: "0-100 км/ц хурд авах хугацаа :",
                Data: "5.1 сек",
              },
              {
                Info: "Түлшний зарцуулалт :",
                Data: "4л/100 км",
              },
            ],
          },
          {
            Text: "Эд анги",
            Data: [
              {
                Info: "Газар хоорондын зай :",
                Data: "210 мм",
              },
              {
                Info: "Урд хэсэг :",
                Data: "Дээшээ доошоо чиглүүлж бүрэн тохируулах боломжтой сэрээ",
              },
              {
                Info: "Арын хэсэг :",
                Data: "Дотоод аюулгүйн дэр",
              },
              {
                Info: "Трейл :",
                Data: "N/A",
              },
              {
                Info: "Рэйк :",
                Data: "25.5°",
              },
            ],
          },
          {
            Text: "Тохиргоо",
            Data: [
              {
                Info: "Урд тормоз :",
                Data: "NISSIN, 300 мм 2 диск, 2 поршений калипер/ABS",
              },
              {
                Info: "Хойд тормоз :",
                Data: "NISSIN, 240 мм-ийн нэг диск, нэг поршений калипер/ABS",
              },
              {
                Info: "Урд дугуй :",
                Data: "Пирелли Метезеллер, 110/80-19",
              },
              {
                Info: "Хойд дугуй :",
                Data: "Pirelli Metezeller, 150/70-17R",
              },
              {
                Info: "Instrumentation :",
                Data: "LED",
              },
              {
                Info: "Бусад :",
                Data: "Яаралтай тусламжийн гэрэл, USB цэнэглэгчийн порт",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    Text: "RETRO",
    ItemList: [
      {
        ItemTitle: "510F",
        Img: f500,
        ItemTabList: [
          {
            Text: "Хэмжээ",
            Data: [
              {
                Info: "Урт X Өргөн X Өндөр:",
                Data: "2156×850×1177 мм",
              },
              {
                Info: "Тэнхлэг хоорондын зай :",
                Data: "1460±10 мм",
              },
              {
                Info: "Суудлын өндөр :",
                Data: "790 мм",
              },
              {
                Info: "Түлшний багтаамж :",
                Data: "20 л",
              },
              {
                Info: "Нийт жин :",
                Data: "191 кг",
              },
            ],
          },
          {
            Text: "Хөдөлгүүр",
            Data: [
              {
                Info: "Хөдөлгүүрийн төрөл :",
                Data: "Хос цилиндр, DOHC, шингэн хөргөлттэй",
              },
              {
                Info: "Хөдөлгүүрийн багтаамж :",
                Data: "498 cc",
              },
              {
                Info: "Ignition method :",
                Data: "EFI (BOSCH)",
              },
              {
                Info: "Гаргах дээд хүч :",
                Data: "35KW/8500rpm",
              },
              {
                Info: "Эргэлтийн дээд хүч :",
                Data: "43N·m/6500rpm",
              },
              {
                Info: "Шахалтын харьцаа :",
                Data: "N/A",
              },
              {
                Info: "Араа :",
                Data: "Гинжин хөтлөгч",
              },
              {
                Info: "Дээд хурд :",
                Data: "170 км/ц",
              },
              {
                Info: "0-100 км/ц хурд авах хугацаа :",
                Data: "5.1 сек",
              },
              {
                Info: "Түлшний зарцуулалт :",
                Data: "4л/100 км",
              },
            ],
          },
          {
            Text: "Эд анги",
            Data: [
              {
                Info: "Газар хоорондын зай :",
                Data: "180 мм",
              },
              {
                Info: "Урд хэсэг :",
                Data: "Дээшээ доошоо чиглүүлж бүрэн тохируулах боломжтой сэрээ",
              },
              {
                Info: "Арын хэсэг :",
                Data: "Дотоод аюулгүйн дэр",
              },
              {
                Info: "Трейл :",
                Data: "35°",
              },
              {
                Info: "Рэйк :",
                Data: "25.5°",
              },
            ],
          },
          {
            Text: "Тохиргоо",
            Data: [
              {
                Info: "Урд тормоз :",
                Data: "298mm 2 floating discs , 2-piston calliper/ABS",
              },
              {
                Info: "Хойд тормоз :",
                Data: "240mm single fixed disc, single piston calliper/ABS",
              },
              {
                Info: "Урд дугуй :",
                Data: "110/80R18",
              },
              {
                Info: "Хойд дугуй :",
                Data: "160/60R17",
              },
              {
                Info: "Гэрэл :",
                Data: "LED",
              },
            ],
          },
        ],
      },
      {
        ItemTitle: "400F SCRAMBLER",
        Img: f400scrambler,
        ItemTabList: [
          {
            Text: "Хэмжээ",
            Data: [
              {
                Info: "Урт X Өргөн X Өндөр:",
                Data: "2156×850×1177 мм",
              },
              {
                Info: "Тэнхлэг хоорондын зай :",
                Data: "1460 мм",
              },
              {
                Info: "Суудлын өндөр :",
                Data: "790 мм",
              },
              {
                Info: "Түлшний багтаамж :",
                Data: "18 л",
              },
              {
                Info: "Нийт жин :",
                Data: "190 кг",
              },
            ],
          },
          {
            Text: "Хөдөлгүүр",
            Data: [
              {
                Info: "Хөдөлгүүрийн төрөл :",
                Data: "Хос цилиндртэй, OHC, шингэн хөргөлттэй, Нэг цилиндрт 4 хавхлага",
              },
              {
                Info: "Хөдөлгүүрийн багтаамж :",
                Data: "378 cc",
              },
              {
                Info: "Ignition method :",
                Data: "EFI",
              },
              {
                Info: "Гаргах дээд хүч :",
                Data: "28.5KW/9000 rpm",
              },
              {
                Info: "Эргэлтийн дээд хүч :",
                Data: "35N·m/6500 rpm",
              },
            ],
          },
          {
            Text: "Эд анги",
            Data: [
              {
                Info: "Газар хоорондын зай :",
                Data: "180 мм",
              },
              {
                Info: "Урд хэсэг :",
                Data: "Yu An, гидравлик",
              },
              {
                Info: "Арын хэсэг :",
                Data: "Yu An, олон тохируулгатай моношоктой хөнгөн цагаан",
              },
              {
                Info: "Жолооны өнцөг:",
                Data: "35°",
              },
              {
                Info: "Рэйк :",
                Data: "25.5°",
              },
            ],
          },
          {
            Text: "Тохиргоо",
            Data: [
              {
                Info: "Урд тормоз :",
                Data: "KAILING, 300 мм-ийн хос диск, хос шахуурга, хос калипер, ABS",
              },
              {
                Info: "Хойд тормоз :",
                Data: "KAILING, 300 мм 2 диск, 2 поршений калипер/ABS",
              },
              {
                Info: "Урд дугуй :",
                Data: "110/80-18",
              },
              {
                Info: "Хойд дугуй :",
                Data: "160/60-17",
              },
              {
                Info: "Гэрэл :",
                Data: "LED",
              },
              {
                Info: "Бусад :",
                Data: "Яаралтай тусламжийн гэрэл, USB цэнэглэгчийн порт",
              },
            ],
          },
        ],
      },
      {
        ItemTitle: "321F",
        Img: f321,
        ItemTabList: [
          {
            Text: "Хэмжээ",
            Data: [
              {
                Info: "Урт X Өргөн X Өндөр:",
                Data: "2034×743×1120 мм",
              },
              {
                Info: "Тэнхлэг хоорондын зай :",
                Data: "1390 мм",
              },
              {
                Info: "Суудлын өндөр :",
                Data: "800 мм",
              },
              {
                Info: "Түлшний багтаамж :",
                Data: "13 л",
              },
              {
                Info: "Нийт жин :",
                Data: "153 кг",
              },
            ],
          },
          {
            Text: "Хөдөлгүүр",
            Data: [
              {
                Info: "Хөдөлгүүрийн төрөл :",
                Data: "Шингэн хөргөлттэй, хос цилиндртэй, DOHC",
              },
              {
                Info: "Хөдөлгүүрийн багтаамж :",
                Data: "322 cc",
              },
              {
                Info: "Ignition method :",
                Data: "EFI",
              },
              {
                Info: "Гаргах дээд хүч :",
                Data: "30.5KW/10500 rpm",
              },
              {
                Info: "Эргэлтийн дээд хүч :",
                Data: "29N·m/9000 rpm",
              },
              {
                Info: "Шахалтын харьцаа :",
                Data: "11.2:1",
              },
              {
                Info: "Араа :",
                Data: "Олон диск нь газрын тосны ваннд шүүрч авах, 6 араа, гинжин хөтөч",
              },
              {
                Info: "Дээд хурд :",
                Data: "170 км/ц",
              },
              {
                Info: "0-100 км/ц хурд авах хугацаа :",
                Data: "5.6 сек",
              },
              {
                Info: "Түлшний зарцуулалт :",
                Data: "3.8л/100 км",
              },
            ],
          },
          {
            Text: "Эд анги",
            Data: [
              {
                Info: "Газар хоорондын зай :",
                Data: "188 мм",
              },
              {
                Info: "Урд хэсэг :",
                Data: "41 мм Yu An доошоо тохируулж болох сэрээ",
              },
              {
                Info: "Арын хэсэг :",
                Data: "Yu An тохируулж болох моношок",
              },
              {
                Info: "Трейл :",
                Data: "95 мм",
              },
              {
                Info: "Рэйк :",
                Data: "24.5°",
              },
            ],
          },
          {
            Text: "Тохиргоо",
            Data: [
              {
                Info: "Урд тормоз :",
                Data: "320 мм хөвөгч диск, 2 поршений калипер/ABS",
              },
              {
                Info: "Хойд тормоз :",
                Data: "240 мм диск, нэг поршений калипер/ABS",
              },
              {
                Info: "Урд дугуй :",
                Data: "110/70R17",
              },
              {
                Info: "Хойд дугуй :",
                Data: "150/60R17",
              },
              {
                Info: "Гэрэл :",
                Data: "LED",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function Moto() {
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
