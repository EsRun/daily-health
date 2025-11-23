import { AppBar, Box, Button, Toolbar } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useEffect, useState } from "react";

const CalendarNavigator = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (month: number) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + month);
      return newDate;
    });
  };

  const setToday = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    console.log(currentDate.getMonth() + 1);
  }, [currentDate]);
  return (
    <Box sx={{ my: 1, display: "flex", justifyContent: "flex-end" }}>
      <Toolbar
        disableGutters
        sx={{
          position: "absolute",
          left: "50%",
          fontSize: "1.2rem",
          fontWeight: "600",
        }}
      >
        <Box>
          {currentDate.getFullYear() +
            "년 " +
            (currentDate.getMonth() + 1) +
            "월"}
        </Box>
      </Toolbar>
      <Toolbar disableGutters sx={{ justifyContent: "end" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "7px",
          }}
        >
          <Button
            color="inherit"
            sx={{
              minWidth: "32px",
              borderRight: "1px solid #ccc",
              borderRadius: 0,
            }}
            onClick={() => changeMonth(-1)}
          >
            <ChevronLeftIcon fontSize="medium" />
          </Button>
          <Button
            color="inherit"
            sx={{
              minWidth: "32px",
              borderRight: "1px solid #ccc",
              borderRadius: 0,
            }}
            onClick={() => changeMonth(+1)}
          >
            <ChevronRightIcon fontSize="medium" />
          </Button>
          <Button color="inherit" onClick={() => setToday()}>
            오늘
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default CalendarNavigator;
