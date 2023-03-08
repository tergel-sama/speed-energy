import {
  Flex,
  Box,
  Heading,
  Spacer,
  Button,
  Text,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">АНГИЛАЛ</Heading>
        </Box>
        <Spacer />
        <Text>Enegery</Text>
        <Spacer />
        <Button colorScheme="teal">Sign Up</Button>
        <Button colorScheme="teal">Log in</Button>
      </Flex>
      <Drawer
        size="lg"
        placement="left"
        onClose={() => {
          console.log("closed");
        }}
        isOpen={true}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#d82424">
          <DrawerHeader borderBottomWidth="1px">
            <Flex justifyContent="center" alignItems="center">
              LOGO
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
