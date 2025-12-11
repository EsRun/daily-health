import React from "react";
import { Modal, Box, Button, TextField } from "@mui/material";

interface Props {
  open: boolean;
  date: string;
  morning: string;
  lunch: string;
  dinner: string;
  setMorning: (v: string) => void;
  setLunch: (v: string) => void;
  setDinner: (v: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  background: "#fff",
  borderRadius: "10px",
  padding: "20px",
  boxShadow: 24,
};

const CalendarInputModal = ({
  open,
  date,
  morning,
  lunch,
  dinner,
  setMorning,
  setLunch,
  setDinner,
  onSave,
  onCancel,
}: Props) => {
  return (
    <Modal open={open} onClose={onCancel}>
      <Box sx={style}>
        <h3 style={{ marginBottom: "10px" }}>{date}</h3>

        <TextField
          label="아침"
          fullWidth
          value={morning}
          onChange={(e) => setMorning(e.target.value)}
          sx={{ marginBottom: "15px" }}
        />

        <TextField
          label="점심"
          fullWidth
          value={lunch}
          onChange={(e) => setLunch(e.target.value)}
          sx={{ marginBottom: "15px" }}
        />

        <TextField
          label="저녁"
          fullWidth
          value={dinner}
          onChange={(e) => setDinner(e.target.value)}
          sx={{ marginBottom: "15px" }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Button variant="outlined" color="error" onClick={onCancel}>
            취소
          </Button>
          <Button variant="contained" color="primary" onClick={onSave}>
            저장
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CalendarInputModal;
