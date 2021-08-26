import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import { default as classes } from "./App.module.scss";

// export interface AppProps {}

const App: React.FC = () => {
  // const [opened, setOpened] = useState(true);

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
