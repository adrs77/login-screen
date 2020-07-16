import React from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Formik, Field } from "formik";
import { getLoginValidationSchema } from "../../validation/LoginValidation";
import styled from "styled-components";
import { connect } from "react-redux";
import { post } from "../../api/requests";
import { auth_login } from "../../actions/actions";


const mapDispatchToProps = (dispatch: Function) => {
  return {
    auth_login: (data: Object) => dispatch(auth_login(data)),
  };
};

function LoginForm({ toggleAlert, auth_login }: Props) {

  const InputComponent = ({ field, ...props }: Field) => (
    <Input {...field} {...props} />
  );

  return (
    <LoginFormStyled>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={getLoginValidationSchema}
        onSubmit={async (values) => {
          let data = {
            email: values.email,
            password: values.password,
          };
          let isAuthenticated = await post(data);
          isAuthenticated.auth && auth_login(isAuthenticated);
          !isAuthenticated.auth && toggleAlert(true);
        }}
      >
        {({ values, errors, touched, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label for="login-email" sm={12}>
                Email
              </Label>
              <Col sm={12}>
                <Field
                  type="email"
                  name="email"
                  id="login-email"
                  placeholder="Your email"
                  component={InputComponent}
                  style={errors.email && touched.email ? styleError : null}
                />
                <span className="error-message">
                  {touched.email && errors.email ? errors.email : ""}
                </span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="login-password" sm={12}>
                Password
              </Label>
              <Col sm={12}>
                <Field
                  type="password"
                  name="password"
                  id="login-password"
                  placeholder="Your password"
                  component={InputComponent}
                  style={
                    errors.password && touched.password ? styleError : null
                  }
                />
                <span className="error-message">
                  {touched.password && errors.password ? errors.password : ""}
                </span>
              </Col>
            </FormGroup>
            <Button type="submit" className="float-right submit-button">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </LoginFormStyled>
  );
}

export default connect(null, mapDispatchToProps)(LoginForm);

const LoginFormStyled = styled.div`
  .error-message {
    font-size: 12px;
    color: crimson;
    position: absolute;
    right: 15px;
  }
  .submit-button {
    margin-top: 1.25rem;
  }
`;

const styleError = {
  border: "2px solid crimson",
};

export interface Props {
  toggleAlert: Function
  auth_login: Function
}

export interface Field {
  field: Object
}