import { createContext } from "react";

type themeType = "light" | "dark";

type themeContextType = {
  theme: themeType;
  setTheme: (theme: themeType) => void;
};

export const ThemeContext = createContext<themeContextType>({
  theme: "light",
  setTheme: () => {},
});
