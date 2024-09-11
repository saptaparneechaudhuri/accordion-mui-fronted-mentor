import { ThemeProvider } from "@mui/system";
import { useMode } from "./context/Theme";
import { Box, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import AppLayout from "./ui/AppLayout";

const App = () => {
  const { theme } = useMode();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ backgroundColor: "primary.light", width: "100%", height: "100%" }}
      >
        <AppLayout />
      </Box>
    </ThemeProvider>
  );
};

export default App;
