import React from "react";
import Todo from "./Todo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter as Router

import Pricing from "./pricing";
import Home from "./home";
import Todo1 from "./todo1";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Wrap your Routes in Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo1" element={<Todo1 />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
};

export default App;
