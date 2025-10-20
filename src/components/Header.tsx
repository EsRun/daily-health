import { Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 0.15rem 0.75rem 0 rgb(58 59 69 / 15%)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold" }}
          component={Link}
          to="/"
        >
          Daily Health
        </Typography>
        <Box>
          <Button component={Link} to="/user">
            User
          </Button>
        </Box>
      </Toolbar>
    </header>
  );
};

export default Header;
