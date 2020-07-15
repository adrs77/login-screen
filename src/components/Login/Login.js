import React from "react";
import {
  Card,
  CardTitle,
} from "reactstrap";
import styled from "styled-components";
import LoginForm from './LoginForm'

function Login() {
  return (
    <LoginStyled>
      <Card body inverse className="login-window">
        <CardTitle>
          <h2>Log in</h2>
        </CardTitle>
        <LoginForm/>
      </Card>
    </LoginStyled>
  );
}

export default Login;

const LoginStyled = styled.div`
  .login-window {
    background-color: #333;
    border-color: #333;
  }
  h2 {
    text-align: center;
  }
`;
