import { useContext, createContext } from "react";
import { createTheme } from "@mui/material";

const themeSettings = () => {
  return {
    palette: {
      primary: {
        main: "hsl(292, 16%, 49%)",
        light: "rgb(249, 240, 255)",
        dark: "rgb(47, 21, 51)",
      },
      neutral: {
        main: "hsl(0, 0%, 100%)",
      },
    },
    typography: {
      fontFamily: ["Work Sans", "sans - serif"].join(""),
    },
  };
};

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  // if if want to use mode, your code goes here

  const theme = createTheme(themeSettings());

  return (
    <ColorContext.Provider value={{ theme }}>{children}</ColorContext.Provider>
  );
};

const useMode = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("Context error");
  }
  return context;
};

export { ColorProvider, useMode };
