import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Sidebar theme={theme} setTheme={setTheme} />
      <MainContent theme={theme} setTheme={setTheme} />
    </>
  );
};

export default App;
