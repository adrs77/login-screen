import React from "react";
import { Card, CardTitle } from "reactstrap";
import styled from "styled-components";
import LoginForm from "./LoginForm";

function Login({toggleAlert}: Props) {
  return (
    <LoginStyled>
      <Card body inverse className="login-window">
        <CardTitle>
          <h2>Log in</h2>
        </CardTitle>
        <LoginForm toggleAlert={toggleAlert} />
      </Card>
    </LoginStyled>
  );
}

export default Login;

const LoginStyled = styled.div`
  .login-window {
    background-color: #333;
    border-color: #333;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  h2 {
    text-align: center;
  }
`;

export interface Props {
  toggleAlert: Function
}