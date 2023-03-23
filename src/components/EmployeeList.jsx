import {
  Box,
  Button,
  Container,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { deleteEmployee, getEmployee } from "./../redux/employee/action";
import { useAppDispatch } from "../redux/store";
import ModalAdminAdd from "./ui/ModalAdminAdd";
import AddEmployeeForm from "./AddEmployeeForm";

const EmployeeList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { employee } = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(getEmployee());
  }, [dispatch]);

  return (
    <Container maxW="1220px" pt="20px">
      <ModalAdminAdd
        isOpen={isOpen}
        onClose={onClose}
        headerText="Добавить сотрудника"
        children={<AddEmployeeForm />}
      />
      <TableContainer>
        <Box display="flex" justifyContent="space-between">
          <Text textAlign="center" fontSize="24px" fontWeight="500">
            Список сотрудников
          </Text>
          <Button bg="blue.500" colorScheme="blue" onClick={onOpen}>
            <IoPersonAddSharp />
          </Button>
        </Box>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Ф.И.О.</Th>
              <Th>Должность</Th>
              <Th>Почта</Th>
              <Th>Зарплата</Th>
            </Tr>
          </Thead>
          <Tbody>
            {employee &&
              employee.map((el) => (
                <Tr key={el.id}>
                  <Td
                    cursor="pointer"
                    _hover={{
                      color: "blue.500",
                    }}
                    onClick={() => {
                      navigate(`/salary/${el.id}`);
                    }}
                  >
                    {el.fio}
                  </Td>
                  <Td>{el.position}</Td>
                  <Td>{el.email}</Td>
                  <Td>
                    <Box
                      w="20px"
                      h="20px"
                      fontSize="20px"
                      cursor="pointer"
                      onClick={() => {
                        navigate(`/historySalary/${el.id}`);
                      }}
                    >
                      <FcMoneyTransfer />
                    </Box>
                  </Td>
                  <Td display="flex">
                    <Box
                      w="20px"
                      h="20px"
                      cursor="pointer"
                      color="blue.800"
                      fontSize="20px"
                      mx="5px"
                      onClick={() => {
                        navigate(`/changeEmployee/${el.id}`);
                      }}
                    >
                      <FaPen />
                    </Box>
                    <Box
                      w="20px"
                      h="20px"
                      cursor="pointer"
                      color="red.500"
                      fontSize="22px"
                      mx="5px"
                      onClick={() => {
                        dispatch(deleteEmployee(el.id));
                      }}
                    >
                      <AiFillDelete />
                    </Box>
                  </Td>
                </Tr>
              ))}
          </Tbody>
          <Tfoot>
            {/* <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr> */}
          </Tfoot>
        </Table>
        <Box mt="10px">
          <Text color="blue.500" fontSize="18px" fontWeight="500">
            Количество сотрудников: {employee.length}
          </Text>
        </Box>
      </TableContainer>
    </Container>
  );
};

export default EmployeeList;
