import React, { useState } from "react";
import styled from "styled-components";
import runner from "../../assets/running-lady.png";
import hideIcon from "../../assets/hide.svg";
import showIcon from "../../assets/show.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Not a valid email"),
  password: yup.string().required("Password is required"),
});

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const StyledHeader = styled.h1`
  color: #1e57f1;
  margin-left: 2rem;
`;

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #c7c7c7;
  height: 63px;
  width: 337px;
  padding-left: 10px;
  font-size: 18px;
`;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: -80px;
  margin-bottom: -10px;
`;

const StyledErrorText = styled.p`
  color: red;
`;

const StyledButton = styled.button`
  height: 63px;
  width: 350px;
  background: #1e57f1;
  color: #ffff;
  text-align: center;
  font-size: 18px;
  border: 0;
  cursor: pointer;
  &:hover {
    background: red;
  }
`;

const Week4 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setSubmitted(true);
    console.log(data);
  }

  const handleClick = (e) => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledWrapper>
      <img src={runner} />
      <StyledHeader> Sally </StyledHeader>
      {submitted && <h1> You're all done</h1>}
      {!submitted && (<form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <StyledInput
            type="text"
            name="email"
            placeholder="Email"
            ref={register()}
          />
        </p>
        <StyledErrorText> {errors.email?.message}</StyledErrorText>

        <p>
          <StyledInput
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            ref={register()}
          />
          <StyledIcon
            src={showPassword ? hideIcon : showIcon}
            onClick={handleClick}
          ></StyledIcon>
          <StyledErrorText> {errors.password?.message}</StyledErrorText>
        </p>
        <p>
          <StyledButton> Login </StyledButton>
        </p>
      </form>)}
    </StyledWrapper>
  );
};

export default Week4;
