import React, { useCallback, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
// import Navbar from "./components/Navbar/Navbar";
import { default as classes } from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
// export interface AppProps {}

const App: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const toggleShow = useCallback((opened) => {
    setOpened(!opened);
  }, []);

  return (
    <div className={classes.app}>
      <BrowserRouter>
        {/* <Navbar /> */}
        <AppRouter />
        <Sidebar opened={opened} toggleShow={toggleShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
