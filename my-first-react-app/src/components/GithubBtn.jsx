// Projectbtn.js
import React from "react";
import styled from "styled-components";

// Styled button component
const StyledGithubBtn = styled.button`
  background-color: #20b2aa;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-top: 30px;

  &:hover {
    background-color: #dc143c;
  }
`;

const GithubBtn = () => {
  return (
      <StyledGithubBtn>View my Github</StyledGithubBtn>
  );
};

export default GithubBtn;
