import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

interface EventData {
  date: string;
  title: string;
  color?: string;
}

interface Props {
  currentMonths: number;
}

const CalendarTable = ({ currentMonths }: Props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState<EventData[]>([]);
  const weekend: number[] = [0, 6];

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

  const setColor = (j: number) => {
    const result = j === 0 || j === 6 ? "#ff1b1b" : "#191919";
    //opacity: currentMonths === day.getMonth() ? 1 : 0.3,
    return result;
  };

  const setOpacity = (day: Date) => {
    const result = currentMonths === day.getMonth() ? 1 : 0.3;
    return result;
  };

  useEffect(() => {
    console.log(currentMonths);
  }, []);
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {["일", "월", "화", "수", "목", "금", "토"].map((week, i) => (
              <Box
                key={i}
                className={`coulmn ${i === 0 ? "sunday" : ""}`}
                role="columnheader"
                sx={{
                  paddingLeft: "5px",
                  flex: 1,
                  border: "1px solid #F2F2F2",
                  borderBottom: 0,
                  fontSize: "0.875rem",
                  color: "#828282",
                }}
              >
                {week}
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {calendar.map((week, i) => (
              <Box key={i} sx={{ display: "flex", flex: 1 }}>
                {week.map((day, j) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      border: "1px solid #f2f2f2",
                      borderTop: i === 0 ? 0 : "1px solid #f2f2f2",
                    }}
                  >
                    <Box
                      sx={{
                        padding: "5px 0 0 5px",
                        flex: 2,
                        //border: "1px solid #F2F2F2",
                        fontSize: "0.875rem",
                        color: setColor(j),
                        opacity: setOpacity(day),
                      }}
                    >
                      {day.getDate()}
                    </Box>
                    <Box sx={{ flex: 8, backgroundColor: "" }}></Box>
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
