import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        gray: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#434957",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
        purpleAccent: {
          100: "#f3e5f5",
          200: "#e1bee7",
          300: "#ce93d8",
          400: "#ba68c8",
          500: "#ab47bc",
          600: "#9c27b0",
          700: "#8e24aa",
          800: "#7b1fa2",
          900: "#6a1b9a",
        },
        trueRed: {
          100: "#f9d3d1",
          200: "#f3a8a4",
          300: "#ed7c76",
          400: "#e75149",
          500: "#e1251b",
          600: "#b41e16",
          700: "#871610",
          800: "#5a0f0b",
          900: "#2d0705",
        },
        trueBlue: {
          100: "#d9edf4",
          200: "#b3dce8",
          300: "#8ecadd",
          400: "#68b9d1",
          500: "#42a7c6",
          600: "#35869e",
          700: "#286477",
          800: "#1a434f",
          900: "#0d2128",
        },
        trueGray: {
          100: "#f4f4f3",
          200: "#e9e9e8",
          300: "#dddedc",
          400: "#d2d3d1",
          500: "#c7c8c5",
          600: "#9fa09e",
          700: "#777876",
          800: "#50504f",
          900: "#282827",
        },
      }
    : {
        gray: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0",
          500: "#141b2d",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
        purpleAccent: {
          100: "#6a1b9a",
          200: "#7b1fa2",
          300: "#8e24aa",
          400: "#9c27b0",
          500: "#ab47bc",
          600: "#ba68c8",
          700: "#ce93d8",
          800: "#e1bee7",
          900: "#f3e5f5",
        },
        trueRed: {
          100: "#2d0705",
          200: "#5a0f0b",
          300: "#871610",
          400: "#b41e16",
          500: "#e1251b",
          600: "#e75149",
          700: "#ed7c76",
          800: "#f3a8a4",
          900: "#f9d3d1",
        },
        trueBlue: {
          100: "#0d2128",
          200: "#1a434f",
          300: "#286477",
          400: "#35869e",
          500: "#42a7c6",
          600: "#68b9d1",
          700: "#8ecadd",
          800: "#b3dce8",
          900: "#d9edf4",
        },
        trueGray: {
          100: "#282827",
          200: "#50504f",
          300: "#777876",
          400: "#9fa09e",
          500: "#c7c8c5",
          600: "#d2d3d1",
          700: "#dddedc",
          800: "#e9e9e8",
          900: "#f4f4f3",
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
        main: mode === "dark" ? colors.primary[500] : colors.primary[100],
      },
      secondary: {
        main: colors.greenAccent[500],
      },
      neutral: {
        dark: colors.gray[800],
        main: colors.gray[500],
        light: colors.gray[100],
      },
      background: {
        default: mode === "dark" ? colors.primary[500] : "#fcfcfc",
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
