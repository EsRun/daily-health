import { AppBar, Box, Button, Toolbar } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";

const CalendarNavigator = () => {
  return (
    <Box>
      <Toolbar sx={{ justifyContent: "end" }}>
        <Box sx={{ display: "flex" }}>
          <ChevronLeftIcon fontSize="large" color="action" />
          <ChevronRightIcon fontSize="large" color="action" />
          <Button>오늘</Button>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default CalendarNavigator;
