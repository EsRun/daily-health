import React, { useEffect, useState } from "react";
import CalendarTable from "../components/Calendar/CalendarTable";
import CalendarNavigator from "../components/Calendar/CalendarNavigator";
import { Box } from "@mui/material";
import CalendarAdd from "../components/Calendar/CalendarAdd";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {}, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <CalendarNavigator
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <CalendarTable currentDate={currentDate} />
      <CalendarAdd />
    </Box>
  );
};

export default Calendar;
