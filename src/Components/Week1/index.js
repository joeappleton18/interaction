import React from "react";
import logo from "./assets/logo.svg";

const Week1 = () => {
  const name = "Joe";
  console.info(logo);
  debugger;

  const location = () => "Brighton";

  return (
    <>
      <img src={logo} alt="logo" />
      <h1>Hello this is week 1</h1>
    </>
  );
};

export default Week1;
