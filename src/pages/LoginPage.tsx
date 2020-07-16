import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Alert } from "reactstrap";
import Login from "../components/Login/Login";
import LoggedIn from "../components/Login/LoggedIn";
import { connect } from "react-redux";

const mapStateToProps = (state: Auth) => {
  return { auth: state.auth };
};

function LoginPage({ auth }: Auth) {
const [alert, toggleAlert] = useState(false)

  return (
    <LoginPageStyled>
      <Container>
        <Row className="min-vh-100">
          <Col xs={12} sm={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }} className="centered-column">
            {auth ? <LoggedIn /> : <Login toggleAlert={toggleAlert} />}
          </Col>
        </Row>
      </Container>
      <Alert className="error-alert" toggle={() => toggleAlert(false)} isOpen={alert} color="danger">
        Email or password is incorrect
      </Alert>
    </LoginPageStyled>
  );
}

export default connect(mapStateToProps)(LoginPage);

const LoginPageStyled = styled.div`
  .centered-column {
    margin-top: auto;
    margin-bottom: auto;
  }
  .error-alert {
    position: absolute;
    bottom: 10px;
    left: 20px;
  }
`;

export interface Auth {
  auth: Object
}