import React from "react";
import abhishek from "../images/abhishek.jpeg"
// const abhishek = require("../images/abhishek.jpeg")

const About = () => {

    return(
        <div className="about">
             <h1>About</h1>
             <img src={abhishek} alt="Abhishek's Pic" />
             {/* <img src={require("../images/abhishek.jpeg")} alt="Abhishek's Pic" /> */}
             <p>
                Hello everyone! I am thrilled to introduce myself as someone with a passion for software and a track record of success in the industry. With five years of experience working at prestigious companies like Amazon and Microsoft, as well as contributing to exciting startups like Think42 and Openhouse, I have honed my skills and gained invaluable knowledge along the way. <br />
                Beyond my professional endeavors, I have also dedicated a significant portion of my career to teaching and mentoring aspiring software professionals. Over the past three years, I have had the privilege of instructing thousands of students across various institutions throughout India. It has been immensely rewarding to witness their growth and see them flourish in their own journeys.
                Currently, I am embarking on a new adventure by creating my own startup. This venture allows me to combine my technical expertise, entrepreneurial spirit, and desire to make a meaningful impact on the world of software. I am excited to tackle the challenges and opportunities that lie ahead, and I am eager to connect with like-minded individuals who share my passion for innovation and growth.<br />
                Thank you for this opportunity to introduce myself, and I look forward to engaging with all of you in the exciting world of software development and entrepreneurship.
             </p>
        </div>
    )
}

export default About;