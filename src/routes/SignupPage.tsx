import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import {
  Box,
  Flex,
  FormControl,
  Icon,
  Input,
  Button,
  Text,
  theme,
  Image,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import { BsAirplaneEngines, BsSave } from "react-icons/bs";
import { PiForkKnifeDuotone } from "react-icons/pi";
import { SlCalender, SlUserFollow } from "react-icons/sl";
import signup from "../assets/animations/signup.gif";

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setError("Password did not match");
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, { displayName: name });
        navigate("/signin");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const benefits = [
    { icon: BsSave, content: "Save your favourite recipes from anywhere" },
    { icon: PiForkKnifeDuotone, content: "Discover top-rated recipes for inspiration" },
    { icon: SlCalender, content: "Plan meals and make shopping lists with ease" },
    { icon: SlUserFollow, content: "Follow your favourite food creators" },
  ];

  return (
    <Flex
      minHeight="100vh"
      h="100vh"
      bg={`linear-gradient(90deg, #fff 70%, #ff957e  70%)`}
      alignItems="center"
      justifyContent="center"
      gap={{ md: 10, lg: 20 }}
      px={10}
    >
      <Box display={{ base: "none", md: "block" }} alignContent="flex-start">
        <Heading fontSize="5xl" mb={10}>
          Tasty<span className="highlighted">Tribe</span>
        </Heading>
        <Heading fontSize="3xl" lineHeight={10}>
          Sign up to <span className="highlighted">save your recipes,</span>{" "}
          <span style={{ display: "block" }}>
            <span className="highlighted">lists,</span> and many more!
          </span>
        </Heading>
        <List my={10} fontSize="lg">
          {benefits.map((benefit, index) => (
            <ListItem key={index} display="flex" alignItems="center" my={4}>
              <Icon as={benefit.icon} mr={8} />
              {benefit.content}
            </ListItem>
          ))}
        </List>
        <Button
          onClick={() => navigate("/")}
          bg="brand.300"
          color="white"
          _hover={{ bg: "#222", color: "#fff" }}
          transition="0.2s linear"
        >
          Explore
        </Button>
      </Box>
      <Box
        p={8}
        maxWidth={{ base: "300px", md: "400px", lg: "400px" }}
        width="100%"
        bg="white"
        borderRadius="md"
        boxShadow="0px 10px 40px -5px rgba(0, 0, 0, 0.5)"
      >
        {error && (
          <Box
            my={4}
            backgroundColor="brand.800"
            maxWidth="400px"
            width="100%"
            borderRadius="md"
            p={3}
            color="white"
            textAlign="center"
          >
            <Text>{error}</Text>
          </Box>
        )}
        <Image src={signup} mx="auto" />

        <FormControl mb={4}>
          <Input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
          />
        </FormControl>
        <FormControl mb={4}>
          <Input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
        </FormControl>
        <FormControl mb={4}>
          <Input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
        </FormControl>
        <FormControl mb={4}>
          <Input
            type="password"
            placeholder="Confirm your password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError("");
            }}
          />
        </FormControl>
        <Button
          backgroundColor="brand.300"
          size="lg"
          width="100%"
          color="white"
          type="submit"
          onClick={onSubmit}
        >
          Sign Up
        </Button>
        <Text mt={4} textAlign="center" fontSize="sm">
          Already signed up?{" "}
          <span className="highlighted">
            <NavLink to="/signin">Sign in</NavLink>
          </span>
        </Text>
      </Box>
    </Flex>
  );
};

export default SignupPage;
