import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/portfolio";
const App = () => {
  return (
    <Router> {/* Wrap everything inside the Router */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Portfolio />} />
          {/* Define other routes and components */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
