import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

interface EventData {
  date: string;
  title: string;
  color?: string;
}

const CalendarTable: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState<EventData[]>([]);

  const buildCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const first = new Date(year, month, 1);
    const startDay = new Date(first);
    startDay.setDate(1 - first.getDay()); // 일요일부터 시작

    return Array.from({ length: 6 }, (_, row) =>
      Array.from({ length: 7 }, (_, col) => {
        const date = new Date(startDay);
        date.setDate(startDay.getDate() + row * 7 + col);
        return date;
      })
    );
  };

  const calendar = buildCalendar();

  useEffect(() => {
    console.log(calendar);
  }, []);
  return (
    <>
      <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
        <Box>Contorl Bar</Box>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {["일", "월", "화", "수", "목", "금", "토"].map((d, i) => (
              <Box
                key={i}
                className={`coulmn ${i === 0 ? "sunday" : ""}`}
                role="columnheader"
                sx={{ flex: 1, border: "1px solid #F2F2F2" }}
              >
                {d}
              </Box>
            ))}
          </Box>
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {calendar.map((week, i) => (
              <Box key={i} sx={{ display: "flex", flex: 1 }}>
                {week.map((day, j) => (
                  <Box
                    key={j}
                    sx={{
                      flex: 1,
                      border: "1px solid #F2F2F2",
                    }}
                  >
                    {day.getDate()}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CalendarTable;
