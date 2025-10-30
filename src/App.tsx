import {} from "react";
import "./App.css";
import Main from "./layouts/Main";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Router from "./router/Router";

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif",
  },
  palette: {
    background: {
      default: "#f9f9f9",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          mx: "auto",
        }}
      >
        <Main>
          <Box sx={{ py: 1, display: "flex", flex: 1 }}>
            <Router />
          </Box>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
