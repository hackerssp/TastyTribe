import { Box, Flex, FormControl, FormLabel, Input, Button, Text, Link } from "@chakra-ui/react";

const SigninPage = () => {
  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to right,#ff421a, #ff6b4c)"
    >
      <Box p={8} maxWidth="400px" width="100%" bg="white" borderRadius="md" boxShadow="lg">
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        <Button colorScheme="orange" size="lg" width="100%">
          Sign In
        </Button>
        <Text mt={4} textAlign="center" fontSize="sm">
          Not signed in yet?{" "}
          <Link href="/signup" color="orange.500">
            Sign Up
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default SigninPage;
