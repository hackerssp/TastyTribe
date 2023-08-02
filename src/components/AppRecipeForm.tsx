import React from "react";
import { Box, Grid, FormControl, FormLabel, Textarea, Button } from "@chakra-ui/react";

const AddRecipeForm = () => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4} p={4} backgroundColor="brand.200">
      <Box gridColumn="span 12" p={8} bg="white" borderRadius="md" boxShadow="lg">
        <FormControl gridColumn="span 12">
          <FormLabel>Recipe Name</FormLabel>
          <Textarea
            variant="outline"
            placeholder="Enter recipe name"
            focusBorderColor="orange.300"
          />
        </FormControl>
        <FormControl gridColumn={{ base: "span 12", md: "span 6" }}>
          <FormLabel>Recipe Ingredients</FormLabel>
          <Textarea
            variant="outline"
            placeholder="Enter recipe ingredients"
            rows={4}
            focusBorderColor="orange.300"
          />
        </FormControl>
        <FormControl gridColumn={{ base: "span 12", md: "span 6" }}>
          <FormLabel>Recipe Description</FormLabel>
          <Textarea
            variant="outline"
            placeholder="Enter recipe description"
            rows={4}
            focusBorderColor="orange.300"
          />
        </FormControl>
        <FormControl gridColumn="span 12">
          <FormLabel>Recipe Image</FormLabel>
          <input type="file" accept="image/*" />
        </FormControl>
        <Box gridColumn="span 12" textAlign="center" my={4}>
          <Button colorScheme="orange" size="lg">
            Add Recipe
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default AddRecipeForm;
