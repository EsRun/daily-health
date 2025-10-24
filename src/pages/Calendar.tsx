import React, { useEffect } from "react";
import CalendarTable from "../components/CalendarTable";

const Calendar: React.FC = () => {
  const today = new Date();
  const currentMonth = today.getMonth();

  useEffect(() => {}, []);

  return (
    <>
      <CalendarTable currentMonths={currentMonth} />
    </>
  );
};

export default Calendar;
