// Chakra imports
import {
  Grid,
  Badge,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";

import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
// import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import React, { useState, useRef } from "react";
// import Conversations from "./components/Conversations";
import Header from "./components/Header";
import { BsCircleFill } from "react-icons/bs";
// import PlatformSettings from "./components/PlatformSettings";
// import ProfileInformation from "./components/ProfileInformation";
// import Projects from "./components/Projects";


function Overview() {
  // Chakra color mode
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  const productInfoTab = useRef();
  const mediaTab = useRef();
  const socialsTab = useRef();
  const pricingTab = useRef();

  const [activeBullets, setActiveBullets] = useState({
    productInfo: true,
    media: false,
    socials: false,
    pricing: false,
  });
  const textColor = useColorModeValue("gray.700", "white");
  
  return (
    <Flex direction="column">
      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_pNc2EiyeYUDHRk4FfI_BRpqj8U1tjltOHfzCe_g&s"}
        name={"김도원"}
        phone={"010-1111-2222"}
      />

      {/* Tab Info */}
      <Tabs variant="unstyled" mt="24px" alignSelf="center">
        <TabList display="flex" align="center">
          <Tab
            ref={productInfoTab}
            _focus="none"
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                productInfo: true,
                media: false,
                socials: false,
                pricing: false,
              })
            }
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              position="relative"
              _before={{
                content: "''",
                width: { sm: "80px", md: "200px" },
                height: "3px",
                bg: activeBullets.media ? textColor : "gray.200",
                left: { sm: "12px", md: "52px" },
                top: {
                  sm: activeBullets.productInfo ? "6px" : "4px",
                  md: null,
                },
                position: "absolute",
                bottom: activeBullets.productInfo ? "40px" : "38px",
                zIndex: -1,
                transition: "all .3s ease",
              }}
            >
              <Icon
                as={BsCircleFill}
                color={activeBullets.productInfo ? textColor : "gray.300"}
                w={activeBullets.productInfo ? "16px" : "12px"}
                h={activeBullets.productInfo ? "16px" : "12px"}
                mb="8px"
              />
              <Text
                color={activeBullets.productInfo ? { textColor } : "gray.300"}
                fontWeight={activeBullets.productInfo ? "bold" : "normal"}
                display={{ sm: "none", md: "block" }}
              >
                1. 레슨 등록
              </Text>
            </Flex>
          </Tab>
          <Tab
            ref={mediaTab}
            _focus="none"
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                productInfo: true,
                media: true,
                socials: false,
                pricing: false,
              })
            }
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              position="relative"
              _before={{
                content: "''",
                width: { sm: "80px", md: "200px" },
                height: "3px",
                bg: activeBullets.socials ? textColor : "gray.200",
                left: { sm: "12px", md: "32px" },
                top: { sm: activeBullets.media ? "6px" : "4px", md: null },
                position: "absolute",
                bottom: activeBullets.media ? "40px" : "38px",
                zIndex: -1,
                transition: "all .3s ease",
              }}
            >
              <Icon
                as={BsCircleFill}
                color={activeBullets.media ? textColor : "gray.300"}
                w={activeBullets.media ? "16px" : "12px"}
                h={activeBullets.media ? "16px" : "12px"}
                mb="8px"
              />
              <Text
                color={activeBullets.media ? { textColor } : "gray.300"}
                fontWeight={activeBullets.media ? "bold" : "normal"}
                transition="all .3s ease"
                _hover={{ color: textColor }}
                display={{ sm: "none", md: "block" }}
              >
                2. 업로드
              </Text>
            </Flex>
          </Tab>
          <Tab
            ref={socialsTab}
            _focus="none"
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                productInfo: true,
                media: true,
                socials: true,
                pricing: false,
              })
            }
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              position="relative"
              _before={{
                content: "''",
                width: { sm: "80px", md: "200px" },
                height: "3px",
                bg: activeBullets.pricing ? textColor : "gray.200",
                left: { sm: "12px", md: "32px" },
                top: { sm: activeBullets.socials ? "6px" : "4px", md: null },
                position: "absolute",
                bottom: activeBullets.socials ? "40px" : "38px",
                zIndex: -1,
                transition: "all .3s ease",
              }}
            >
              <Icon
                as={BsCircleFill}
                color={activeBullets.socials ? textColor : "gray.300"}
                w={activeBullets.socials ? "16px" : "12px"}
                h={activeBullets.socials ? "16px" : "12px"}
                mb="8px"
              />
              <Text
                color={activeBullets.socials ? { textColor } : "gray.300"}
                fontWeight={activeBullets.socials ? "bold" : "normal"}
                transition="all .3s ease"
                _hover={{ color: textColor }}
                display={{ sm: "none", md: "block" }}
              >
                3. 저장
              </Text>
            </Flex>
          </Tab>
          <Tab
            ref={pricingTab}
            _focus="none"
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                productInfo: true,
                media: true,
                socials: true,
                pricing: true,
              })
            }
          >
            <Flex direction="column" justify="center" align="center">
              <Icon
                as={BsCircleFill}
                color={activeBullets.pricing ? textColor : "gray.300"}
                w={activeBullets.pricing ? "16px" : "12px"}
                h={activeBullets.pricing ? "16px" : "12px"}
                mb="8px"
              />
              <Text
                color={activeBullets.pricing ? { textColor } : "gray.300"}
                fontWeight={activeBullets.pricing ? "bold" : "normal"}
                transition="all .3s ease"
                _hover={{ color: textColor }}
                display={{ sm: "none", md: "block" }}
              >
                4. 발송
              </Text>
            </Flex>
          </Tab>
        </TabList>

      {/* <TabPanels mt="24px" maxW={{ md: "90%", lg: "100%" }} mx="auto"></TabPanels>
      <TabPanel>  */}
      <Card>
        <CardHeader mb="22px">
          {/* <Text color={textColor} fontSize="lg" fontWeight="bold">
            Product Information
          </Text> */}
        </CardHeader>
        <CardBody>
          <Stack direction="column" spacing="20px" w="100%">
            <Stack direction={{ sm: "column", md: "row" }} spacing="30px">
              <Badge
                bgImage={SidebarHelpImage}
                // colorScheme
                textColor="white"
                w="100px"
                h="40px"
                mb="400px"
                borderRadius="10px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              > 1회차
              </Badge>
              <FormControl>
                {/* <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                  Category
                </FormLabel> */}
                  <Select
                  h="40px"
                  fontSize="xs"
                  placeholder="똑딱이"
                  color="gray.400"
                  borderRadius="15px"
                  >
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Real Estate</option>
                  <option>Others</option>
                </Select>
                </FormControl>
                  <Button
                    variant="no-hover"
                    bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                    alignSelf="flex-end"
                    mt="24px"
                    w="100px"
                    h="35px"
                    onClick={() => mediaTab.current.click()}
                  >
                <Text fontSize="xs" color="#fff" fontWeight="bold"> NEXT
                </Text>
              </Button>
            </Stack>
          </Stack>
      </CardBody>
    </Card>



      

      {/* <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap="22px">
        <PlatformSettings
          title={"Platform Settings"}
          subtitle1={"ACCOUNT"}
          subtitle2={"APPLICATION"}
        />
        <ProfileInformation
          title={"Profile Information"}
          description={
            "Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
          }
          name={"Esthera Jackson"}
          mobile={"(44) 123 1234 123"}
          email={"esthera@simmmple.com"}
          location={"United States"}
        />
        <Conversations title={"Conversations"} />
      </Grid>
      <Projects title={"Projects"} description={"Architects design houses"} /> */}
        {/* </TabPanel> */}
      </Tabs>
    </Flex>    
  );
}

export default Overview;
