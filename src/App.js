import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import LoginForm from "./loginForm";
import SignUpForm from "./signupForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/loginForm" />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/signupForm" element={<SignUpForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
