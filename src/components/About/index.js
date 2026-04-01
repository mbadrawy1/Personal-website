import { useEffect, useState } from "react";
import {
  faGitAlt,
  faPython,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Coding from "../../assets/images/coding.png";
import Robot from "../../assets/images/Robot.png";
import NodeJS from "../../assets/images/NodeJS.png";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass("text-animate-hover");
  //   }, 3000);
  // }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Strong software engineer with a focus on Artificial Intelligence.
            Skilled at developing and deploying applications with the MERN stack
            (MongoDB, React, NodeJS) and Python. Leveraging a solid background
            in data structures, algorithms, and object-oriented software design
            to create user-focused and super-integrated software.
          </p>
          <p align="LEFT">
            Graduate of Alamein International University (AIU) with a BS in
            Computer Engineering, majoring in Artificial Intelligence (Class of
            2026). Award-winning competitor — recognized as the Youngest
            Competitor at Google's largest AI hackathon in Africa & MENA.
          </p>
          <p>
            Experienced in freelance AI consulting, machine learning
            engineering through the Digital Egypt Pioneers Initiative, and
            full-stack development. Passionate about building intelligent,
            real-world solutions.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img
                src={Coding}
                alt="JavaScript Developer Name, Web Developer Name"
                style={{
                  width: "150px",
                  height: "150px",
                  marginLeft: "600px",
                  marginTop: "700px",
                  marginBottom: "500px",
                  marginRight: "450px",
                  rotate: "-90deg",
                }}
              />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="yellow" />
            </div>
            <div className="face3">
              <img
                src={Robot}
                alt="JavaScript Developer Name, Web Developer Name"
                style={{
                  width: "150px",
                  height: "150px",
                  marginLeft: "400px",
                  marginTop: "500px",
                  marginBottom: "500px",
                  marginRight: "450px",
                  // rotate: "-90deg",
                }}
              />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <img
                src={NodeJS}
                alt="NodeJS"
                style={{
                  width: "150px",
                  height: "150px",
                  marginLeft: "400px",
                  marginTop: "500px",
                  marginBottom: "500px",
                  marginRight: "450px",
                  // rotate: "-90deg",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
