import {
  Container,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getOneEmployee } from "../redux/employee/action";
import { useAppDispatch } from "../redux/store";
import { Box } from "@chakra-ui/react";
import { getHistorySalary } from "../redux/main/action";

const SalaryHistory = () => {
  const { idEmployee } = useParams();

  const dispatch = useAppDispatch();

  const { employeeOne } = useSelector((state) => state.employee);
  const { historySalary } = useSelector((state) => state.main);

  const getPensVznos = (arr) => {
    let result = 0;
    for (const el of arr) {
      result += +el.pensionContribution;
    }
    return result;
  };

  const getPensPhond = (arr) => {
    let result = 0;
    for (const el of arr) {
      result += +el.pensionFund;
    }
    return result;
  };

  const getTotalSosVyplaty = (arr) => {
    let result = 0;
    for (const el of arr) {
      result += +el.socialBenefits;
    }
    return result;
  };

  const getTotalTax = (arr) => {
    let result = 0;
    for (const el of arr) {
      result += +el.tax;
    }
    return result;
  };

  useEffect(() => {
    dispatch(getHistorySalary(idEmployee));
    dispatch(getOneEmployee(idEmployee));
  }, [dispatch, idEmployee]);

  return (
    <Container maxW="1220px" py="20px">
      <Box>
        <Text textAlign="center" fontSize="30px">
          {employeeOne.name} {employeeOne.surname}
        </Text>
        <Table>
          <Thead>
            <Tr>
              <Th>№</Th>
              <Th>Дата начало работы</Th>
              <Th>Дата конца работы</Th>
              <Th>Оклад</Th>
              <Th>Пенсионный взнос</Th>
              <Th>Пенсионный фонд</Th>
              <Th>Социальные выплаты</Th>
              <Th>Подоходный налог</Th>
              <Th>Итого получил</Th>
            </Tr>
          </Thead>
          <Tbody>
            {historySalary.map((el, idx) => (
              <Tr key={el.id}>
                <Td>{idx + 1}</Td>
                <Td>{el.workStart}</Td>
                <Td>{el.workEnd}</Td>
                <Td fontWeight="500">{el.salary}</Td>
                <Td>{el.pensionContribution}</Td>
                <Td>{el.pensionFund}</Td>
                <Td>{el.socialBenefits}</Td>
                <Td>{el.tax}</Td>
                <Td bg="blue.200" fontWeight="600">
                  {el.salaryCalculation}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Box>
          <Text fontWeight="600" my="10px">
            Общая сумма налогов и взносов:
          </Text>
          <Text>Пенсонного взноса: {getPensVznos(historySalary)} сом</Text>
          <Text>Пенсионный фонд: {getPensPhond(historySalary)} сом</Text>
          <Text>
            Социальные выплаты: {getTotalSosVyplaty(historySalary)} сом
          </Text>
          <Text>Подоходный налог: {getTotalTax(historySalary)} сом</Text>
        </Box>
      </Box>
    </Container>
  );
};

export default SalaryHistory;
