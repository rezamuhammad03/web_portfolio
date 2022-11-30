import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import "./second.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="flex justify-between px-8 py-2 bg-gradient-to-r from-blue-200 to-blue-500 bordered-bot">
        <div className="container-half">logo</div>
        <div className="container-half">
          <ul className="flex gap-10 justify-end">
            <li className="px-2 py-0 bg-white rounded-md hover:bg-gray-200">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2 py-0 bg-white rounded-md hover:bg-gray-200">
              <Link to="private">More about me</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
