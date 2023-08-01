import { Box, Flex, FormControl, FormLabel, Input, Button, Link, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const SignupPage = () => {
  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to right, #ff6b4c,#ff957e)"
    >
      <Box p={8} maxWidth="400px" width="100%" bg="white" borderRadius="md" boxShadow="lg">
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter your name" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" placeholder="Enter your password again" />
        </FormControl>
        <Button backgroundColor="brand.300" size="lg" width="100%" color="white">
          Sign Up
        </Button>
        <Text mt={4} textAlign="center" fontSize="sm">
          Already signed up?{" "}
          <Link href="/signin" color="brand.500">
            Sign In
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default SignupPage;
