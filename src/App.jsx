import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App text-slate-900 bg-slate-50 dark:bg-slate-950 dark:text-slate-100 min-h-screen transition-colors duration-300">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
