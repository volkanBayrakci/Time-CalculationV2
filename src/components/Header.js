import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { MdDarkMode, MdWbSunny } from "react-icons/md";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [click, setClick] = useState(false);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark", setClick(!click));
  };

  return (
    <>
      <header className="header">
        <span className="header-button" onClick={handleTheme}>
          {click ? <MdDarkMode /> : <MdWbSunny />}
        </span>
      </header>
    </>
  );
}
