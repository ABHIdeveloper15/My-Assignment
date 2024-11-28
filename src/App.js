import React from "react";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import CalendarComponent from "./components/CalendarComponent";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <h1>Dashboard</h1>
        <Table />
        <CalendarComponent />
      </div>
    </div>
  );
};

export default App;
