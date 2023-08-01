import { HStack, Heading, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} p={4} borderBottom="1px solid grey">
      <Heading fontSize="2xl">
        Tasty<span className="highlighted">Tribe</span>{" "}
      </Heading>
      <HStack gap={4}>
        <Button
          backgroundColor="brand.300"
          color="#fff"
          _hover={{
            bg: "brand.400",
          }}
        >
          Sign up
        </Button>
        <Button>Sign in</Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
