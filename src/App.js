import "./sass/main.scss";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </>
  );
}
