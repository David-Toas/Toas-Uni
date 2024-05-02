/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

// eslint-disable-next-line react/prop-types
const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        {/* // eslint-disable-next-line react/no-unescaped-entities */}
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a tranfomative educational journey with our university
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experience needed to excel in the dynamic field of education
        </p>
        <p>
          With a focus on innovation, hands-on learning and personalized
          mentorship, our program prepare aspiring educators to make a
          meaningful impact in classrooms, school, and communities.
        </p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlocks your full potential in shaping the future of education.</p>
      </div>
    </div>
  );
};

export default About;
