import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Login from "../components/Login/Login";
import LoggedIn from '../components/Login/LoggedIn'

function LoginPage() {
  return (
    <LoginPageStyled>
      <Container>
        <Row className="min-vh-100">
          <Col lg={{ size: 6, offset: 3 }} className="centered-column">
            <Login />
            <LoggedIn/>
          </Col>
        </Row>
      </Container>
    </LoginPageStyled>
  );
}

export default LoginPage;

const LoginPageStyled = styled.div`
  .centered-column {
    margin-top: auto;
    margin-bottom: auto;
  }
`;
