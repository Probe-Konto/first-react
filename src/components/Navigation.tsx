import Sun from "./Sun";
import Moon from "./Moon";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";
const navItems: string[] = ["Home", "About", "Contact"] as const;

export default function Navigation() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleThemeClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <nav className="">
      <ul className="flex gap-5 bg-blue-600 px-8 py-4 text-blue-200 dark:bg-fuchsia-700 dark:text-fuchsia-200">
        {navItems.map((item: string) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}

        <li className="ml-auto" id="themeBtn" onClick={handleThemeClick}>
          {theme === "light" && <Sun />}
          {theme === "dark" && <Moon />}
        </li>
      </ul>
    </nav>
  );
}
