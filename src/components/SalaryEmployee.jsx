import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { API } from "../api";
import { getOneEmployee } from "../redux/employee/action";
import { getMain } from "../redux/main/action";
import { useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";

const SalaryEmployee = () => {
  const [value, setValue] = React.useState("3");
  const [loading, setLoading] = React.useState(false);
  const [emloyee, setEmployee] = React.useState({});

  const { main } = useSelector((state) => state.main);

  const { idEmployee } = useParams();
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm();

  const fetchSubmit = async (locol) => {
    try {
      setLoading(true);
      const { data } = await API.post("main", { ...locol });
      setEmployee(data);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };

  const onSubmit = (data) => {
    dispatch(fetchSubmit(data));
  };

  useEffect(() => {
    dispatch(getOneEmployee(idEmployee));
    dispatch(getMain());
  }, [dispatch, idEmployee]);

  return (
    <section>
      <Container maxW="1220px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl color="black">
            <Input
              {...register("employeeId")}
              type="hidden"
              defaultValue={idEmployee}
            />
            <Text textAlign="center" my="10px" fontSize="30px" fontWeight="600">
              Расчет заработной платы
            </Text>
            <Box display="flex" fontWeight="500" justifyContent="space-around">
              <label>
                Дата начало:
                <Input
                  type="date"
                  {...register("workStart", { required: true })}
                />
              </label>
              <label>
                Дата окончание:
                <Input
                  type="date"
                  {...register("workEnd", { required: true })}
                />
              </label>
              <label>
                Оклад:
                <Input
                  type="number"
                  {...register("salary", { required: true })}
                />
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
                <Radio value="1">Больничный</Radio>
                <Radio mx="40px" value="2">
                  Отпуск
                </Radio>
                <Radio value="3">Нет</Radio>
              </Stack>
            </RadioGroup>
            <Box
              display={"flex"}
              maxW="560px"
              justifyContent="space-around"
              mx="auto"
            >
              <label>
                Дата начало:
                <Input
                  type="date"
                  {...register("startAbsenteeism")}
                  defaultValue="2023-03-16"
                />
              </label>
              <label>
                Дата окончание:
                <Input
                  type="date"
                  {...register("endAbsenteeism")}
                  defaultValue="2023-03-16"
                />
              </label>
            </Box>
            <Box display="flex" justifyContent="center" pt="20px">
              <Button
                isLoading={loading}
                type="submit"
                bg="blue.500"
                colorScheme="blue"
                w="100px"
              >
                Расчет
              </Button>
            </Box>
          </FormControl>
        </form>
        <Box w="100%" h="2px" bg="blue.500" my="30px"></Box>
        {emloyee.id && (
          <Box display="flex" justifyContent="space-between">
            <Box mb="20px">
              <Text fontSize="20px">Отчисления работодателя:</Text>
              <Box mt="10px">
                <Text>
                  Пенсионный взнос -({+main.tax*100})%: {emloyee.pensionContribution}
                  сом
                </Text>
              </Box>
              <Box mt="10px">
                <Text>
                  Государственный накопительный пенсионный фонд -(
                  {+main.pensionFund*100})%: {emloyee.pensionFund}сом
                </Text>
              </Box>
              <Box mt="10px">
                <Text>
                  Социальные выплаты -({main.pensionContribution}):{" "}
                  {emloyee.socialBenefits}сом
                </Text>
              </Box>
              <Box my="20px"></Box>
              <Box mt="10px">
                <Text>
                  Подоходный налог -({+main.socialBenefits*100})%: {emloyee.tax}
                </Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize="20px">Расчет зарплаты:</Text>
              <Box mt="10px">
                <Text>К выдаче: {emloyee.salaryCalculation}сом</Text>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </section>
  );
};

export default SalaryEmployee;
