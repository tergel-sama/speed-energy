import { Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Container
      bgColor="#111111"
      px="120px"
      h="100vh"
      margin="unset"
      maxW="1920px"
    >
      {children}
    </Container>
  );
}
