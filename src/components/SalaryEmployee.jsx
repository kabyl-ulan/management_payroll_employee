import {
  Box,
  Container,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SalaryEmployee = () => {
  const [value, setValue] = React.useState("");
  return (
    <section>
      <Container maxW="1220px">
        <Text textAlign="center" my="10px" fontSize="30px" fontWeight="600">
          Расчет заработной платы
        </Text>
        <Box display="flex" fontWeight="500" justifyContent="space-around">
          <label>
            Дата начало:
            <Input type="date" />
          </label>
          <label>
            Дата окончание:
            <Input type="date" />
          </label>
          <label>
            Оклад:
            <Input type="number" />
          </label>
        </Box>
        <Box w="100%" h="1px" bg="blue.500" my="30px"></Box>
        <Text fontSize="20px" fontWeight="500" mt="30px" textAlign="center">
          Выберите один из вариантов ниже, если были невыходы на работу
        </Text>
        <RadioGroup
          onChange={setValue}
          value={value}
          display="flex"
          justifyContent="center"
          mt="20px"
        >
          <Stack direction="row">
            <Radio mx="40px" value="1">
              Больничный
            </Radio>
            <Radio mx="40px" value="2">
              Отпуск
            </Radio>
            <Radio mx="40px" value="3">
              Прочее
            </Radio>
          </Stack>
        </RadioGroup>
        <Box
          display={value > 0 ? "flex" : "none"}
          maxW="560px"
          justifyContent="space-around"
          mx="auto"
        >
          <label>
            Дата начало:
            <Input type="date" />
          </label>
          <label>
            Дата окончание:
            <Input type="date" />
          </label>
        </Box>
        <Box w="100%" h="2px" bg="blue.500" my="30px"></Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Text fontSize="20px">Отчисления работодателя:</Text>
            <Box mt="10px">
              <Text>Пенсионный взнос (-8%): {"800сом"}</Text>
            </Box>
            <Box mt="10px">
              <Text>
                Государственный накопительный пенсионный фонд (-2%): {"200сом"}
              </Text>
            </Box>
            <Box mt="10px">
              <Text>Социальные выплаты: {"-650сом"}</Text>
            </Box>
            <Box my="20px">
              <Text>10000 - 800 - 200 - 650 = 8350</Text>
            </Box>
            <Box mt="10px">
              <Text>Подоходный налог (-10%): {"8350 - 10% = 7515 сом"}</Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize="20px">Расчет зарплаты:</Text>
            <Box mt="10px">
              <Text>К выдаче: {"7515сом"}</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default SalaryEmployee;
