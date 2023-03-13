import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [passEye, setPassEye] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setPassEye(!passEye);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin");
  };

  return (
    <>
      <Container maxW="1220px" h="100vh" display="flex" alignItems="center">
        <Box w={["100%", "90%", "560px"]} mx="auto">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Text
                textAlign="center"
                fontSize="35px"
                mb="15px"
                fontWeight="600"
              >
                Авторизация
              </Text>
              <Box mb="15px">
                <Input
                  id="email"
                  required
                  type="email"
                  placeholder="Введите почту*"
                  border="1px"
                  borderColor="#AAAAAA"
                  focusBorderColor="#174079"
                  bg="#ffffff"
                  borderRadius={{ base: "10px", sm: "15px" }}
                  fontSize="14px"
                  py={{ base: "10px", sm: "25px" }}
                  color="#174079"
                />
              </Box>
              <Box mb="15px">
                <InputGroup>
                  <Input
                    required
                    id="password"
                    type={passEye ? "text" : "password"}
                    placeholder="Введите пароль*"
                    border="1px"
                    borderColor="#AAAAAA"
                    focusBorderColor="#174079"
                    bg="#ffffff"
                    borderRadius={{ base: "10px", sm: "15px" }}
                    fontSize="14px"
                    py={{ base: "10px", sm: "25px" }}
                    color="#174079"
                  />
                  <InputRightElement width="3rem" h="100%">
                    <Box
                      color="#2A3654"
                      h="100%"
                      display="flex"
                      alignItems="center"
                      cursor="pointer"
                      fontSize={{ base: "20px", sm: "25px" }}
                      onClick={handleClick}
                    >
                      {passEye ? <BsEyeSlashFill /> : <BsEyeFill />}
                    </Box>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Button
                w="100%"
                fontSize="18px"
                fontWeight="500"
                bg="blue.500"
                color="white"
                colorScheme="blue"
                borderRadius={{ base: "10px", sm: "15px" }}
                py="25px"
                type="submit"
              >
                Войти
              </Button>
            </FormControl>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default LoginForm;
