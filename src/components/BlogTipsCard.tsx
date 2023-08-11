import { Box, Text, Image, Flex, Badge } from "@chakra-ui/react";

interface Tips {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

interface Props {
  tips: Tips;
}

const BlogTipsCard = ({ tips: { title, description, tags, image } }: Props) => {
  return (
    <Box boxShadow="md" rounded="md" bg="white">
      <Image src={image} alt={title} objectFit="cover" borderRadius="lg" />
      <Box p={4}>
        <Flex mt={2} flexWrap="wrap">
          {tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} colorScheme="orange" mr={1} mb={1} py={1} px={2}>
              {tag}
            </Badge>
          ))}
        </Flex>
        <Text fontWeight="bold" fontSize="lg" my={2} color="brand.300">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default BlogTipsCard;
