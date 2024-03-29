import { Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Container
      bgColor="#111111"
      px={{ base: "20px", md: "120px" }}
      margin="auto"
      maxW="1920px"
    >
      {children}
    </Container>
  );
}
