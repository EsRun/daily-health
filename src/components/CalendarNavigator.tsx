import { AppBar, Box, Button, Toolbar } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";

const CalendarNavigator = () => {
  return (
    <Box>
      <Toolbar sx={{ justifyContent: "end" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "7px",
          }}
        >
          <Button
            sx={{
              minWidth: "32px",
              borderRight: "1px solid #ccc",
              borderRadius: 0,
            }}
          >
            <ChevronLeftIcon fontSize="medium" />
          </Button>
          <Button
            sx={{
              minWidth: "32px",
              borderRight: "1px solid #ccc",
              borderRadius: 0,
            }}
          >
            <ChevronRightIcon fontSize="medium" />
          </Button>
          <Button>오늘</Button>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default CalendarNavigator;
