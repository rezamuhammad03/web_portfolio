import React, { Component } from "react";
import { Link } from "react-router-dom";
import saya from "../images/foto_syahreza.png";
import art from "../images/man_vector.png";
import unknown from "../images/tanda-tanya.png";
import { motion } from "framer-motion";
import "../style.css";
import "./second.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <main>
        <section className="container-half mx-auto my-5 bg-blue-300 text-center px-5 py-3 rounded-xl text-white flex flex-col gap-2 border-2 border-white">
          <motion.div
            className="container-full flex justify-center"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={saya}
              alt="saya"
              className="foto rounded-full bingkai relative"
            />
          </motion.div>
          <motion.div
            className="container-full font-bold"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>Muhamad syahreza Jaelani</p>
          </motion.div>
        </section>

        <section className="container-full px-14">
          <div className="container-full border-2 border-white bg-blue-300 rounded-xl flex justify-between mx-auto">
            <div className="container-60 py-5 px-8 text-white text-right">
              <motion.p
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis, praesentium! Necessitatibus praesentium, voluptates
                sunt iste, cumque natus quis incidunt velit voluptatibus maxime
                aliquam? Laboriosam iste praesentium repudiandae, laudantium
                tenetur maxime!
              </motion.p>
            </div>
            <div className="container-40 flex justify-center align-middle bg-blue-400 rounded-xl">
              <motion.img
                src={art}
                alt="art"
                className="foto"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </section>

        <section className="container-full px-14 my-5">
          <div className="container-full border-2 border-white bg-blue-300 rounded-xl flex justify-between mx-auto">
            <div className="container-40 flex justify-center align-middle bg-blue-400 rounded-xl px-5 py-8">
              <motion.p
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum repellendus laborum, voluptas architecto ipsum, quas
                illo alias necessitatibus veritatis doloremque nam nulla iure
                harum eius vitae corporis debitis. Sequi, eum.
              </motion.p>
            </div>
            <div className="container-60 py-5 px-8 text-left text-white flex gap-5 flex-wrap justify-end">
              <motion.div
                className="box flex flex-col align-middle justify-center border-2 border-white rounded-lg"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
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
          </div>
        </section>

        <section className="container-full px-14 my-5">
          <div className="container-full border-2 border-white bg-blue-300 rounded-xl flex justify-between mx-auto">
            <div className="container-60 py-5 px-8 text-left text-white flex gap-5 flex-wrap">
              <motion.div
                className="box flex flex-col align-middle justify-center border-2 border-white rounded-lg"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
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
            <div className="container-40 flex justify-center align-middle bg-blue-400 rounded-xl px-5 py-8">
              <motion.p
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum repellendus laborum, voluptas architecto ipsum, quas
                illo alias necessitatibus veritatis doloremque nam nulla iure
                harum eius vitae corporis debitis. Sequi, eum.
              </motion.p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
