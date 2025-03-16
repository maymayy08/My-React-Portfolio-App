import React from "react";
import GithubBtn from "../components/GithubBtn";
import Portrait from "../assets/images/May.png";
import "../styles/PortraitImg.css";
import styled from "styled-components";

const HomePage = () => {
  return (
    <div>
      {/* Home Section */}
      <section id="home" style={SectionStyle}> 
        <h1 style={textStyle}>Hey there!👋 I'm May</h1>
        <p style={paragraphStyle}>
          I'm developing full-stack web applications as I learn! 
          Every project helps me sharpen my skills in front-end, back-end, and databases.
        </p>
        <GithubBtn/>
      </section>

      {/* About Section */}
      {/* About Section */}
<section id="about" style={{...SectionStyle, marginBottom: "50px"}}>  
  <div>
    <h3 style={SharedTextStyle}>About Me</h3>
    <ContextDiv>
      I'm currently learning to code with a focus on full-stack web development 
      JavaScript, Python, Node.js, React, HTML/CSS, and MySQL). My goal is to 
      become a proficient junior developer, either full-stack, back-end, or 
      front-end, and build real-world projects. Here you can find the projects 
      I have been working on throughout my bootcamp journey. 
    </ContextDiv>
  </div>
  <img className="portrait-Img" src={Portrait} alt="Portrait" />
</section>

{/* Projects Section */}
<section id="projects" style={{...SectionStyle, marginTop: "50px"}}> 
  <StyledHeading><h3 style={SharedTextStyle}>My Projects</h3></StyledHeading>
  {/* Add your project content here */}
</section>

    </div>
  );
};

// Styling for the Main Content Section
const textStyle = {
  background: "linear-gradient(to right, #20B2AA, #DC143C, #9370DB)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  fontSize: "4rem",
  marginTop: "100px",
  textAlign: "center",
};

const SectionStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
};

const paragraphStyle = {
  fontSize: "18px",
  textAlign: "justify",
  width: "80%",
  lineHeight: "1.6",
  fontWeight: "bolder", 
  marginTop: "40px",
};

const ContextDiv = styled.div`
  padding: 40px;
  background-color: #f4f4f4;
  border-radius: 8px;
  width: 100%;  /* Let it take full width but constrain with max-width */
  max-width: 80%;  /* Set max width for larger screens */
  height: auto;  /* Ensure height adjusts to content */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 3px solid #20B2AA;
  margin: 0 auto;  /* Center the box */
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  box-sizing: border-box; 
  overflow: hidden;  /* Prevent overflow */

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 20px;
  }
`;

const SharedTextStyle = {
  background: '#FFF5EE',
  textAlign: 'center',
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  fontSize: "3rem",
  marginTop: "120px",
  
}

const StyledHeading = styled.h3`
  ${SharedTextStyle}
  margin-top: 0; 

  @media (max-width: 768px) {
    margin-top: 15px;  
  }
`;


export default HomePage;