import { Box } from "@mui/material";
import React, { useState } from "react";
import CalendarInputModal from "./CalendarInputModal";

interface EventItem {
  date: string;
  morning?: string;
  lunch?: string;
  dinner?: string;
}

interface Props {
  currentDate: Date;
}

const CalendarTable = ({ currentDate }: Props) => {
  const [events, setEvents] = useState<EventItem[]>([]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  // 입력 상태
  const [morning, setMorning] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");

  const buildCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const first = new Date(year, month, 1);

    const startDay = new Date(first);
    startDay.setDate(1 - first.getDay());

    return Array.from({ length: 6 }, (_, row) =>
      Array.from({ length: 7 }, (_, col) => {
        const d = new Date(startDay);
        d.setDate(startDay.getDate() + row * 7 + col);
        return d;
      })
    );
  };

  const calendar = buildCalendar();

  const openInputModal = (day: Date) => {
    const dateStr = day.toISOString().split("T")[0];
    setSelectedDate(dateStr);
    setOpenModal(true);
  };

  const handleSave = () => {
    setEvents((prev) => [
      ...prev,
      { date: selectedDate, morning, lunch, dinner },
    ]);

    setMorning("");
    setLunch("");
    setDinner("");
    setOpenModal(false);
  };

  const handleCancel = () => {
    setMorning("");
    setLunch("");
    setDinner("");
    setOpenModal(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {calendar.map((week, i) => (
          <Box key={i} sx={{ display: "flex", flex: 1 }}>
            {week.map((day, j) => (
              <Box
                key={day.toISOString()}
                sx={{
                  flex: 1,
                  border: "1px solid #f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": { background: "#c4eaff99", cursor: "pointer" },
                }}
                onClick={() => openInputModal(day)}
              >
                <Box sx={{ padding: "5px" }}>{day.getDate()}</Box>

                <Box sx={{ fontSize: "0.7rem", paddingLeft: "5px" }}>
                  {events
                    .filter((e) => e.date === day.toISOString().split("T")[0])
                    .map((evt, idx) => (
                      <div key={idx} style={{ color: "#1976d2" }}>
                        {evt.morning && `아침: ${evt.morning}`}{" "}
                        {evt.lunch && `점심: ${evt.lunch}`}{" "}
                        {evt.dinner && `저녁: ${evt.dinner}`}
                      </div>
                    ))}
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      {/* 모달 컴포넌트 사용 */}
      <CalendarInputModal
        open={openModal}
        date={selectedDate}
        morning={morning}
        lunch={lunch}
        dinner={dinner}
        setMorning={setMorning}
        setLunch={setLunch}
        setDinner={setDinner}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </>
  );
};

export default CalendarTable;
