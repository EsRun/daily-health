import React, { useEffect } from "react";
import CalendarTable from "../components/CalendarTable";
import CalendarNavigator from "../components/CalendarNavigator";
import { Box } from "@mui/material";

const Calendar: React.FC = () => {
  const today = new Date();
  const currentMonth = today.getMonth();

  useEffect(() => {}, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <CalendarNavigator />
      <CalendarTable currentMonths={currentMonth} />
    </Box>
  );
};

export default Calendar;
