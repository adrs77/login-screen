import React from "react";
import { Card, CardTitle, Button } from "reactstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { auth_unlog } from "../../actions/actions";

const mapDispatchToProps = (dispatch: Function) => {
  return {
    auth_unlog: (data: Object) => dispatch(auth_unlog(data)),
  };
};

function LoggedIn({auth_unlog}: Props) {
  return (
    <LoginStyled>
      <Card body inverse className="login-window">
        <CardTitle>
          <h2>Success!</h2>
        </CardTitle>
        You successfully logged in, click button below to unlog.
        <Button className="back-button float-right" onClick={() => auth_unlog(false)}>
          Unlog
        </Button>
      </Card>
    </LoginStyled>
  );
}

export default connect(null, mapDispatchToProps)(LoggedIn);

const LoginStyled = styled.div`
  .login-window {
    background-color: #333;
    border-color: #333;
  }
  h2 {
    text-align: center;
  }
  .back-button {
    margin-top: 1.25rem;
  }
`;

export interface Props {
  auth_unlog: Function
}