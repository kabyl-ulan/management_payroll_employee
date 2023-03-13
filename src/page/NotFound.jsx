import React from "react";
import { Container, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <>
      <Container
        maxW="1220px"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="40px" fontWeight="600">
          404
        </Text>
      </Container>
    </>
  );
};

export default NotFound;
