import React from "react";
import { EmployeeList } from "../components";

const AdminPage = ({ header }) => {
  return (
    <>
      {header}
      <EmployeeList />
    </>
  );
};

export default AdminPage;
