import React from "react";
import { Card, CardTitle } from "reactstrap";
import styled from "styled-components";

function LoggedIn() {
  return (
    <LoginStyled>
      <Card body inverse className="login-window">
        <CardTitle>
          <h2>Success!</h2>
        </CardTitle>
        You successfully logged in, click button below to try again.
      </Card>
    </LoginStyled>
  );
}

export default LoggedIn;

const LoginStyled = styled.div`
  .login-window {
    background-color: #333;
    border-color: #333;
  }
  h2 {
    text-align: center;
  }
`;
