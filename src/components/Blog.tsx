import { useEffect, useState } from "react";
import { Box, Heading, Image, Text, Link, Icon, Divider, SimpleGrid } from "@chakra-ui/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import pacncake from "../assets/blog_images/pancake.jpg";
import recipeTipsAndTricks from "../data/recipeTipsAndTricks";
import BlogTipsCard from "./BlogTipsCard";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Box paddingX={{ base: 6, lg: 40 }} mt={{ base: 5, md: 10 }}>
        <Heading textAlign="center" color="brand.400">
          Blogs
        </Heading>
        <Box
          display={{ base: "block", md: "flex", lg: "flex" }}
          gap={{ base: 6, lg: 12 }}
          mt={{ base: 5, md: 10 }}
        >
          <Box
            width={{ base: "100%", md: "50%", lg: "50%" }}
            display={{ base: "block", md: "block", lg: "flex" }}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Image src={pacncake} borderRadius="xl"></Image>
          </Box>
          <Box width={{ base: "100%", md: "50%", lg: "50%" }} marginTop={{ base: "20px", md: 0 }}>
            <Heading fontSize="xl" color="brand.400">
              Tips & Tricks
            </Heading>
            <Heading fontSize={{ base: "2xl", lg: "5xl" }} marginTop={2}>
              Flipping Fantastic: A Pancake Journey from Batter to Plate
            </Heading>
            <Text marginTop={2}>
              Pancakes, the quintessential comfort food that has delighted breakfast tables for
              generations, are much more than just a simple morning indulgence. Join us on a
              delightful journey as we explore the fascinating world of pancakes, from their history
              to the art of flipping perfection.
            </Text>
            <Box marginTop={2}>
              <Link href="#" color="brand.400">
                Know more
                <Icon as={BsFillArrowRightCircleFill} marginLeft={2} />
              </Link>
            </Box>
          </Box>
        </Box>
        <Divider marginTop={{ base: 10, md: 20 }} />
        <Heading color="brand.400" textAlign="center" mt={6}>
          More Tips & Tricks
        </Heading>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10} my={10}>
          {recipeTipsAndTricks.map((tips, index) => (
            <BlogTipsCard tips={tips} key={index} />
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
};

export default Blog;
