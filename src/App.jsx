import React from "react";
import { Route, Routes } from "react-router-dom";

import { AdminPage, HomePage, NotFound } from "./page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
