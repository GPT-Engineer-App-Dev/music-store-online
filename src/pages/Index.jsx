import { useState } from 'react';
import { Button, Text, VStack, Box, Flex, Heading, Container } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = ["All", "Guitars", "Keyboards", "Drums", "Accessories"];
  const products = [
    { id: 1, name: "Acoustic Guitar", category: "Guitars" },
    { id: 2, name: "Electric Keyboard", category: "Keyboards" },
    { id: 3, name: "Drum Set", category: "Drums" },
    { id: 4, name: "Guitar Picks", category: "Accessories" },
  ];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Container maxW="container.md" p={4}>
      <Flex direction={{ base: "column", md: "row" }} align="start">
        <Box w={{ base: "100%", md: "25%" }} p={4} borderRight={{ md: "1px solid" }} borderColor="gray.200">
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="lg">Categories</Heading>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "solid" : "outline"}
                onClick={() => setSelectedCategory(category)}
                width="100%"
              >
                {category}
              </Button>
            ))}
          </VStack>
        </Box>
        <Box w={{ base: "100%", md: "75%" }} p={4}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to our Online Music Instrument Store
          </Heading>
          <Text fontSize="lg" mb={8}>
            Explore our wide range of musical instruments and accessories.
          </Text>
          <VStack spacing={4} align="start">
            {filteredProducts.map(product => (
              <Box key={product.id} p={4} borderWidth="1px" borderRadius="md" w="100%">
                <Text fontSize="xl">{product.name}</Text>
                <Text fontSize="md" color="gray.500">{product.category}</Text>
                <Button mt={2} colorScheme="teal" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;