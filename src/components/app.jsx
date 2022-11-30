import React, { Component } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "../style.css";
import "./app.css";
import Home from "./home";
import Private from "./private";
import Navbar from "./navbar";
import Footer from "./footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="private" element={<Private />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
