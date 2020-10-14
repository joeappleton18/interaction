import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
  width: 20vw;
`;

const Alert = () => {
  const [visible, setVisible] = useState(true);

  const handleClick = (e) => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <StyledDiv>
          <p>this is an example</p>
          <span onClick={handleClick}>x</span>
        </StyledDiv>
      )}
    </>
  );
};

const Week2 = () => {
  const name = "Joe";

  const location = () => "Brighton";

  return <Alert />;
};

export default Week2;
