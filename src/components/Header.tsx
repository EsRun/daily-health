import React from "react";
import { AppBar, Toolbar, Typography, Box, Divider } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import { Link } from "react-router-dom";

const Header = () => {
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
          px: 3,
          py: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            px: 5,
            fontWeight: "bold",
            color: "#333",
            fontSize: "1.2rem",
          }}
          component={Link}
          to="/"
        >
          Daily Skin
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            color: "#666",
            fontSize: "0.750rem",
          }}
        >
          <Box
            component={Link}
            to="/Statistics"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ArticleOutlinedIcon fontSize="large" />
            통계
          </Box>
          <Box
            component={Link}
            to="/Management"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SettingsApplicationsOutlinedIcon fontSize="large" />
            설정
          </Box>
        </Box>
      </Toolbar>

      <Divider sx={{ borderColor: "#f2f2f2" }} />
    </AppBar>
  );
};

export default Header;
