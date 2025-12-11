import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";

interface Props {
  onClick: () => void;
}

const CalendarAdd = ({ onClick }: Props) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "fixed",
        bottom: 20,
        right: 30,
        cursor: "pointer",
        fontSize: 60,
        "&:hover": { opacity: 0.8 },
      }}
    >
      <AddCircleIcon fontSize="inherit" color="info" />
    </Box>
  );
};

export default CalendarAdd;
