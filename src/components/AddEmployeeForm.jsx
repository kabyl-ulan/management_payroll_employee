import React, { useState } from "react";
import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import { useAppDispatch } from "../redux/store";
import { setEmployee } from "./../redux/employee/action";

const AddEmployeeForm = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    surname: "",
    phoneNumber: "",
    position: "",
  });

  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setEmployee(user));
  };

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Input
              type="text"
              required
              placeholder="Введите имя"
              mt="10px"
              onChange={handleChange}
              name="name"
              defaultValue={user.name}
            />
            <Input
              type="text"
              required
              placeholder="Введите фамилию"
              mt="10px"
              onChange={handleChange}
              name="surname"
              defaultValue={user.surname}
            />
            <Input
              type="email"
              required
              placeholder="Введите почту"
              mt="10px"
              onChange={handleChange}
              name="email"
              defaultValue={user.email}
            />
            <Input
              type="tel"
              placeholder="Введите номер"
              mt="10px"
              onChange={handleChange}
              name="phoneNumber"
              defaultValue={user.phoneNumber}
            />
            <Input
              type="text"
              required
              placeholder="Введите должность"
              mt="10px"
              onChange={handleChange}
              name="position"
              defaultValue={user.position}
            />
            <Button
              type="submit"
              mt="10px"
              w="100%"
              bg="blue.500"
              colorScheme="blue"
            >
              Сохранить
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default AddEmployeeForm;
