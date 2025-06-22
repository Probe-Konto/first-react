import { useState } from "react";
import Form from "./components/Form";
import Navigation from "./components/Navigation";
import { ThemeContext } from "./themeContext";

type themeType = "light" | "dark";

function App() {
  const defaultTheme: themeType = window.matchMedia(
    "(prefers-color-scheme: light)",
  ).matches
    ? "light"
    : "dark";

  const [theme, setTheme] = useState<themeType>(defaultTheme);

  return (
    <section className={theme}>
      <ThemeContext value={{ theme, setTheme }}>
        <Navigation />
        <Form />
      </ThemeContext>
    </section>
  );
}

export default App;

//dark light mode that resepects default with context api
// useEffect with local storage
// ueref with html element
