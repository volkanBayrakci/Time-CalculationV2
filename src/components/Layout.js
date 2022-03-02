import { useContext } from "react";
import Header from "./Header";

import ThemeContext from "../context/ThemeContext";
import TimeCalc from "./TimeCalc";
import TargetCalc from "./TargetCalc";

export default function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`wrapper ${theme === "light" ? "dark" : "light"}`}>
        <div className="container">
          <Header />
          <TimeCalc />
          <hr />
          <TargetCalc />
        </div>
      </div>
    </>
  );
}
