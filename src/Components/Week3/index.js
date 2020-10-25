import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  color: #fff;
  background-color: ${(props) => props.color};
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0.3);
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 2%;
`;

const Button = (props) => {
  const { children, color, disabled, hoverColor, ...other } = props;
  return (
    <StyledButton
      color={disabled ? "grey" : color}
      disabled={disabled}
      {...other}
    >
      {" "}
      {children}{" "}
    </StyledButton>
  );
};

const Week3 = () => {
  const handleMouseOver = (e) => {
    debugger;
    console.log("mouse is over me");
  };
  return (
    <StyledWrapper>
      <Button onMouseOver={handleMouseOver} color="#6200ee">
        {" "}
        Button{" "}
      </Button>
      <Button color="#1200ee"> Button 2 </Button>
      <Button color="#1280ee"> Button 3 </Button>
    </StyledWrapper>
  );
};

export default Week3;
