import React from "react";
import { MdLogout } from "react-icons/md";
import { Container, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <Box bg="gray.100">
      <Container maxW="1220px">
        <Box
          display="flex"
          justifyContent="space-between"
          py="20px"
          alignItems="center"
        >
          <Text
            color="blue.500"
            fontSize="30px"
            fontWeight="600"
            cursor="pointer"
            onClick={() => {
              navigate("/admin");
            }}
          >
            Админ панел
          </Text>
          <Box
            fontSize="24px"
            display="flex"
            alignItems="center"
            cursor="pointer"
            onClick={logoutUser}
            fontWeight="600"
          >
            <Text mb="5px" mr="10px" fontSize="18px">
              Выйти
            </Text>
            <MdLogout />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderAdmin;
