import React from "react";
import { Route, Routes } from "react-router-dom";
import Calendar from "../pages/Calendar";
import Menu from "../pages/Menu";
import Statistics from "../pages/Statistics";
import Management from "../pages/Management";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Calendar />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/management" element={<Management />} />
    </Routes>
  );
};

export default Router;
