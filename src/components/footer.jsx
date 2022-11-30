import React, { Component } from "react";
import "../style.css";
import "./second.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="mt-auto flex justify-between text-white bg-gradient-to-r from-blue-200 to-blue-500 px-5 py-3 bordered-top">
        <div className="container-half text-black flex flex-col justify-center align-middle px-11">
          <div className="container-half">
            <p>All Rights Reserved</p>
            <p>@2022 Muhamad syahreza jaelani</p>
          </div>
          <div className="container-half">
            <p>Contacts</p>
            <ul className="flex gap-2">
              <li>
                <a href="">Linkedin</a>
              </li>
              <li>
                <a href="">Discord</a>
              </li>
              <li>
                <a href="">Github</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-half text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ducimus
          perspiciatis. Dignissimos mollitia tempore fugit possimus minima iusto
          laudantium! Aut exercitationem laboriosam, ducimus nobis vitae quaerat
          placeat numquam vero quae!
        </div>
      </footer>
    );
  }
}

export default Footer;
