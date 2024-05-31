import { Container, Text, VStack, Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <Flex direction="column" align="center">
        <Heading as="h1" size="2xl" my={4}>
          Welcome to our Online Music Instrument Store
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={8}>
          Explore our wide range of musical instruments and accessories.
        </Text>
        <Link to="/products">
          <Button colorScheme="blue" size="lg">
            View Products
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default Index;