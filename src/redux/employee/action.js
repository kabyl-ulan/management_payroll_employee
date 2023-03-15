import { API } from "../../api";
import { employeeOneSuccess, subEmployeeSuccess } from "./type";

export const getEmployee = () => async (dispatch) => {
  try {
    const { data } = await API.get("user/all");
    dispatch(subEmployeeSuccess(data));
  } catch (e) {
    console.log(e.message);
  }
};

export const getOneEmployee = (id) => async (dispatch) => {
  try {
    const { data } = await API.get(`user/${id}`);
    dispatch(employeeOneSuccess(data));
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    const { data } = await API.delete(`user/${id}`);
    window.location.reload();
    console.log(data);
    // dispatch(subEmployeeSuccess(data));
  } catch (e) {
    console.log(e);
  }
};

export const setEmployee = (user) => async (dispatch) => {
  try {
    const { data } = await API.post("user/add-employee", {
      ...user,
    });
    window.location.reload();
    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
};

export const changeEmployee = (id, user) => async (dispatch) => {
  try {
    const { data } = await API.put(`user/${id}`, {
      ...user,
    });
    window.location.reload();
    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
};
