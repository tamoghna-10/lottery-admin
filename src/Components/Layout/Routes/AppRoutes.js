import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../AdminLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
