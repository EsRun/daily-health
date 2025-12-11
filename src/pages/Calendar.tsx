import React, { useState } from "react";
import CalendarTable from "../components/Calendar/CalendarTable";
import CalendarNavigator from "../components/Calendar/CalendarNavigator";
import { Box } from "@mui/material";
import CalendarAdd from "../components/Calendar/CalendarAdd";
import CalendarInputModal from "../components/Calendar/CalendarInputModal";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // 모달 관련 상태
  const [openModal, setOpenModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [morning, setMorning] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");

  const openAddModal = () => {
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);
    setOpenModal(true);
  };

  const closeModal = () => {
    setMorning("");
    setLunch("");
    setDinner("");
    setOpenModal(false);
  };

  const saveData = () => {
    console.log("저장 데이터:", {
      date: selectedDate,
      morning,
      lunch,
      dinner,
    });
    closeModal();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <CalendarNavigator
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />

      <CalendarTable currentDate={currentDate} />

      {/* + 버튼 클릭하면 모달 오픈 */}
      <CalendarAdd onClick={openAddModal} />

      <CalendarInputModal
        open={openModal}
        date={selectedDate}
        morning={morning}
        lunch={lunch}
        dinner={dinner}
        setMorning={setMorning}
        setLunch={setLunch}
        setDinner={setDinner}
        onSave={saveData}
        onCancel={closeModal}
      />
    </Box>
  );
};

export default Calendar;
