import { API } from "../../api";
import { fetchHistoryMain, fetchMain } from "./type";

export const getMain = () => async (dispatch) => {
  try {
    const { data } = await API.get("main/1");
    dispatch(fetchMain(data));
  } catch (e) {
    console.log(e.message);
  }
};

export const getHistorySalary = (id) => async (dispatch) => {
  try {
    const { data } = await API.get(`main/get-all-tax/${id}`);
    dispatch(fetchHistoryMain(data));
  } catch (e) {
    console.log(e.message);
  }
};
