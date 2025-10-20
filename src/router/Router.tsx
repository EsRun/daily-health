import React from "react";
import { Route, Routes } from "react-router-dom";
import Calendar from "../pages/Calendar";
import User from "../pages/User";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Calendar />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default Router;
