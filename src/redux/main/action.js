import { API } from "../../api";
import { fetchMain } from "./type";

export const getMain = () => async (dispatch) => {
  try {
    const { data } = await API.get("main/1");
    dispatch(fetchMain(data));
  } catch (e) {
    console.log(e.message);
  }
};
