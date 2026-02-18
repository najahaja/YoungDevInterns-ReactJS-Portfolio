import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
