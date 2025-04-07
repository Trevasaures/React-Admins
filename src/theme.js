import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#e9f5e9", // Very light green
          200: "#c9e4c9",
          300: "#a8d3a8",
          400: "#88c288", // Softer green (main)
          500: "#68b168", // Primary green (base tone)
          600: "#549054",
          700: "#407040",
          800: "#2c502c",
          900: "#183018",
        },
        secondary: {
          100: "#f5f2e7", // Warm beige
          200: "#ebe5cf",
          300: "#e1d7b7",
          400: "#d7ca9f",
          500: "#cdbc87",
          600: "#a4966c",
          700: "#7b7051",
          800: "#524a36",
          900: "#29241b",
        },
        neutral: {
          100: "#f7f7f7", // Near white
          200: "#e1e1e1",
          300: "#cfcfcf",
          400: "#b1b1b1",
          500: "#8f8f8f",
          600: "#6d6d6d",
          700: "#4b4b4b",
          800: "#2a2a2a",
          900: "#111111", // Near black
        },
        background: {
          default: "#121212", // Dark mode background
          paper: "#1e1e1e",
        },
      }
    : {
        primary: {
          100: "#e9f5e9",
          200: "#c9e4c9",
          300: "#a8d3a8",
          400: "#88c288",
          500: "#68b168",
          600: "#549054",
          700: "#407040",
          800: "#2c502c",
          900: "#183018",
        },
        secondary: {
          100: "#fefaf5",
          200: "#fcf2e9",
          300: "#f9e9db",
          400: "#f7e0ce",
          500: "#f5d8c2", // Light beige tone
          600: "#c4ad9b",
          700: "#938275",
          800: "#62574e",
          900: "#312b27",
        },
        neutral: {
          100: "#ffffff",
          200: "#f7f7f7",
          300: "#eeeeee",
          400: "#e0e0e0",
          500: "#bdbdbd",
          600: "#9e9e9e",
          700: "#7d7d7d",
          800: "#5c5c5c",
          900: "#3b3b3b",
        },
        background: {
          default: "#fcfcfc", // Light mode background
          paper: "#ffffff",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      primary: {
        main: colors.primary[500],
      },
      secondary: {
        main: colors.secondary[500],
      },
      neutral: {
        dark: colors.neutral[700],
        main: colors.neutral[500],
        light: colors.neutral[100],
      },
      background: {
        default: colors.background.default,
        paper: colors.background.paper,
      },
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for the color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
