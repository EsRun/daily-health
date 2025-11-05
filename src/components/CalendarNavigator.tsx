import { AppBar, Box, Button, Toolbar } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useEffect, useState } from "react";

const CalendarNavigator = () => {
  const [currentYear, setCurrentYer] = useState(new Date());
  useEffect(() => {
    console.log(currentYear.getMonth() + 1);
  }, [currentYear]);
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
          {currentYear.getFullYear() +
            "년 " +
            (currentYear.getMonth() + 1) +
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
          >
            <ChevronRightIcon fontSize="medium" />
          </Button>
          <Button color="inherit">오늘</Button>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default CalendarNavigator;
