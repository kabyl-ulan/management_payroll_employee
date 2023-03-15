import React from "react";
import { SalaryEmployee } from "../components";

const SalaryPage = ({ header }) => {
  return (
    <>
      {header}
      <SalaryEmployee />
    </>
  );
};

export default SalaryPage;
