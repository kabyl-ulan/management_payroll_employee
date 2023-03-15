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
import { PUBLIC_API } from "../api";

const LoginForm = () => {
  const [passEye, setPassEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setPassEye(!passEye);
  };

  const fetchLogin = async (auth) => {
    try {
      setLoading(true);
      const { data } = await PUBLIC_API.post("user/login", {
        ...auth,
      });
      setLoading(false);
      localStorage.setItem("token", data.token);
      navigate("/admin");
    } catch (e) {
      alert(e.message);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchLogin(user);
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
                  name="email"
                  defaultValue={user.email}
                  placeholder="Введите почту*"
                  border="1px"
                  borderColor="#AAAAAA"
                  focusBorderColor="#174079"
                  bg="#ffffff"
                  borderRadius={{ base: "10px", sm: "15px" }}
                  fontSize="14px"
                  py={{ base: "10px", sm: "25px" }}
                  color="#174079"
                  onChange={handleChange}
                />
              </Box>
              <Box mb="15px">
                <InputGroup>
                  <Input
                    required
                    id="password"
                    type={passEye ? "text" : "password"}
                    name="password"
                    defaultValue={user.password}
                    placeholder="Введите пароль*"
                    border="1px"
                    borderColor="#AAAAAA"
                    focusBorderColor="#174079"
                    bg="#ffffff"
                    borderRadius={{ base: "10px", sm: "15px" }}
                    fontSize="14px"
                    py={{ base: "10px", sm: "25px" }}
                    color="#174079"
                    onChange={handleChange}
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
                isLoading={loading}
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
