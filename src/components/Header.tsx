import React from "react";
import { AppBar, Toolbar, Typography, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 0.15rem 0.75rem 0 rgb(58 59 69 / 15%)",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          px: 2,
          py: 1,
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#333",
            fontSize: "1.1rem",
          }}
          component={Link}
          to="/"
        >
          Daily Skin
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", color: "#666" }}>
          <Box component={Link} to="/Statistics">
            통계
          </Box>
          <Box component={Link} to="/Management">
            설정
          </Box>
        </Box>
      </Toolbar>

      <Divider sx={{ borderColor: "#f2f2f2" }} />
    </AppBar>
  );
};

export default Header;
