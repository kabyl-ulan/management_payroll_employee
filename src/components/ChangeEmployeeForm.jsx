import { Box, Button, Container, FormControl, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { changeEmployee, getOneEmployee } from "../redux/employee/action";
import { useAppDispatch } from "../redux/store";

const ChangeEmployeeForm = () => {
  const { idEmployee } = useParams();

  const { employeeOne } = useSelector((state) => state.employee);

  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(changeEmployee(idEmployee, data));
  };

  useEffect(() => {
    dispatch(getOneEmployee(idEmployee));
  }, [dispatch, idEmployee]);

  return (
    <Container maxW="1220px">
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Input
              {...register("name", { required: true })}
              type="text"
              placeholder="Введите имя"
              mt="10px"
              defaultValue={employeeOne.name}
            />
            <Input
              {...register("surname", { required: true })}
              type="text"
              placeholder="Введите фамилию"
              mt="10px"
              defaultValue={employeeOne.surname}
            />
            <Input
              {...register("email", { required: true })}
              type="email"
              placeholder="Введите почту"
              mt="10px"
              defaultValue={employeeOne.email}
            />
            <Input
              {...register("phoneNumber", { required: true })}
              type="tel"
              placeholder="Введите номер"
              mt="10px"
              defaultValue={employeeOne.phoneNumber}
            />
            <Input
              {...register("position", { required: true })}
              type="text"
              placeholder="Введите должность"
              mt="10px"
              defaultValue={employeeOne.position}
            />
            <Button
              type="submit"
              mt="10px"
              w="100%"
              bg="blue.500"
              colorScheme="blue"
            >
              Изменить
            </Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};

export default ChangeEmployeeForm;
