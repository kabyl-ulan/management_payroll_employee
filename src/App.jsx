import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderAdmin } from "./components";

import {
  AdminPage,
  ChangeEmployeePage,
  HistorySalaryPage,
  HomePage,
  NotFound,
  SalaryPage,
} from "./page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage header={<HeaderAdmin />} />} />
      <Route
        path="/changeEmployee/:idEmployee"
        element={<ChangeEmployeePage header={<HeaderAdmin />} />}
      />
      <Route
        path="/salary/:idEmployee"
        element={<SalaryPage header={<HeaderAdmin />} />}
      />
      <Route
        path="/historySalary/:idEmployee"
        element={<HistorySalaryPage header={<HeaderAdmin />} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
