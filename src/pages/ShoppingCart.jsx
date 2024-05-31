import { Container, Box, VStack, Text, Button, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleUpdateQuantity = (productId, quantity) => {
    // Logic to update the quantity of a product in the cart
  };

  const handleRemoveItem = (productId) => {
    // Logic to remove a product from the cart
  };

  const handleProceedToCheckout = () => {
    // Logic to proceed to the checkout page
  };

  return (
    <Container maxW="container.md" p={4}>
      <Heading as="h1" size="2xl" mb={4}>
        Shopping Cart
      </Heading>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <VStack spacing={4} align="start">
          {cartItems.map(item => (
            <Box key={item.productId} p={4} borderWidth="1px" borderRadius="md" w="100%">
              <Text fontSize="xl">{item.name}</Text>
              <Flex justify="space-between" align="center">
                <Text fontSize="md" color="gray.500">Quantity: {item.quantity}</Text>
                <Button size="sm" onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}>+</Button>
                <Button size="sm" onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}>-</Button>
                <Button size="sm" onClick={() => handleRemoveItem(item.productId)}>Remove</Button>
              </Flex>
            </Box>
          ))}
          <Button onClick={handleProceedToCheckout}>Proceed to Checkout</Button>
        </VStack>
      )}
    </Container>
  );
};

export default ShoppingCart;