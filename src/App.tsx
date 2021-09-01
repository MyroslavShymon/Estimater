import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
// import Navbar from "./components/Navbar/Navbar";
import { default as classes } from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
// export interface AppProps {}

const App: React.FC = () => {
  // const [opened, setOpened] = useState(true);

  return (
    <div className={classes.app}>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Header />
        <AppRouter />
        <Sidebar />
      </BrowserRouter>
    </div>
  );
};

export default App;
