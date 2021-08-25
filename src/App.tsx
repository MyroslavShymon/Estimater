import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";

// export interface AppProps {}

const App: React.FC = () => {
  return (
    <div className="red">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
