import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "hsl(176, 50%, 47%)",
    secondary: "hsl(176, 72%, 28%)",
    text: "hsl(0, 0%, 48%)",
  },
  fontSizes: {
    sm: 12,
    m: 14,
    l: 16,
    xl: 22,
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
