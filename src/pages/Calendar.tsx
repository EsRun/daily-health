import React, { useEffect } from "react";
import CalendarTable from "../components/Calendar/CalendarTable";
import CalendarNavigator from "../components/Calendar/CalendarNavigator";
import { Box } from "@mui/material";
import CalendarAdd from "../components/Calendar/CalendarAdd";

const Calendar: React.FC = () => {
  const today = new Date();
  const currentMonth = today.getMonth();

  useEffect(() => {}, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <CalendarNavigator />
      <CalendarTable currentMonths={currentMonth} />
      <CalendarAdd />
    </Box>
  );
};

export default Calendar;
