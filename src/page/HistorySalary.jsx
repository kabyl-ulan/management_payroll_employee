import React from "react";

import { SalaryHistory } from "../components";

const HistorySalaryPage = ({ header }) => {
  return (
    <>
      {header}
      <SalaryHistory />
    </>
  );
};

export default HistorySalaryPage;
