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
  palette: {
    background: {
      default: "#f9f9f9",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          width: "1280px",
          maxWidth: "1280px",
          mx: "auto",
        }}
      >
        <Main>
          <Box sx={{ py: 1 }}>
            <Router />
          </Box>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
