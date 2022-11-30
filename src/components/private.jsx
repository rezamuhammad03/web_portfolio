import React, { Component } from "react";
import { Link } from "react-router-dom";
import unknown from "../images/tanda-tanya.png";
import { motion } from "framer-motion";
import "../style.css";
import "./second.css";

class Private extends Component {
  state = {};
  render() {
    return (
      <main>
        <motion.section
          className="container-half mx-auto my-5 bg-blue-300 text-center px-5 py-3 rounded-xl text-white flex flex-col gap-2 border-2 border-white"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-bold">This is private content</h2>
        </motion.section>

        <motion.section
          className="container-full px-14"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="container-full border-2 border-white bg-blue-300 rounded-xl flex justify-between mx-auto">
            <div className="container-60 bg-blue-300 py-5 px-8 rounded-xl">
              Hobby
            </div>
            <div className="container-40 bg-blue-400 py-5 px-8 rounded-xl text-white">
              Hobi saya adalah meme
            </div>
          </div>
        </motion.section>

        <motion.section
          className="container-full mx-auto my-5 px-14"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="container-full bg-blue-300 text-center px-5 py-3 rounded-xl text-white flex flex-col gap-2 border-2 border-white">
            <motion.div
              className="box flex flex-col align-middle justify-center border-2 border-white rounded-lg"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="box-header text-center bg-blue-500 border-b-2 rounded-lg p-1">
                Header
              </div>
              <div className="box-content flex justify-center p-2">
                <img src={unknown} alt="skill" className="foto" />
              </div>
              <div className="box-desc bg-blue-500 border-t-2 rounded-lg p-1">
                Explanation bla bla
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    );
  }
}

export default Private;
