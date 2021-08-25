import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

// export interface AppProps {}

const App: React.FC = () => {
  return (
    <div className="red">
      <Navbar />
      App Component
    </div>
  );
};

export default App;
