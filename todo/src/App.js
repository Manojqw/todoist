import React from "react";
import Todo from "./Todo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter as Router

import Pricing from "./pricing";
import Home from "./home";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Wrap your Routes in Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
};

export default App;
